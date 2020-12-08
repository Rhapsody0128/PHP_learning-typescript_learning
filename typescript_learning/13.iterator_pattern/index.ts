interface Iterator<T>{
	// 事實上原本多一個 first方法代表取得聚合物的第一個值，不過本篇無需求，因此選擇不設定為Iterator<T>的規格

	// first():T|null;

	next():void;

	// 確定是否到達終點
	isDone():boolean;

	// 迭代器目前迭 代到的值，也可能為null
	currentItem:T|null
}  
interface Iterable<T>{
	createIterator():Iterator<T>
}

// 上為陽春版迭代器介面-------------------------------------
// 下為陽春版迭代器實踐-------------------------------------

class NormalIterator<T> implements Iterator<T>{
	public currentItem:T|null=null;
	private currentIndex=0;

	constructor(private items:Array<T>){
		this.currentItem = items[0]
	}
	public isDone(){
		return this.currentItem == null;
	}
	public next(){
		// 如果早就isDone，就拋出 Out of bound 相關的錯誤訊息
		if(this.isDone()) throw new Error('Iterator out of bound.');

		// 正常迭代到下個元素
		this.currentIndex++;
		this.currentItem = this.items[this.currentIndex];
	}
}

class MyArray<T> implements Iterable<T>{
	constructor(public items:Array<T>){}

	// 此為Factory Method，專門建立MyArray的迭代器
	createIterator(){
		return new NormalIterator<T>(this.items);
	}
}

// 建立簡單聚合物
let aCollection = new MyArray<number>([1,2,3,4,5]);
// 建立該聚合物的迭代器
let anIterator = aCollection.createIterator();


// 迴圈遍歷迭代器
while(!anIterator.isDone()){
	console.log(`Iterated value:${anIterator.currentItem}`);
	anIterator.next()
}

// 如果硬要叫 next，就會觸發Out of bound 錯誤
try{
	anIterator.next();
}catch(err){
	console.log('Out of bound error caught!');
}

// 實踐LinkedListNode<T>介面

interface LinkedListNode<T> {
  value:T;
  next():LinkedListNode<T> | null;
}

interface LinkedList<T>{
  head:LinkedListNode<T>|null;
  length():number
  at(index:number):LinkedListNode<T>|null;
  insert(index:number,value:any):void;
  remove(index:number):void
}

class GenericLinkedListNode<T> implements LinkedListNode<T>{
	public next():LinkedListNode<T>|null{return null};
	constructor(public value:T){}
}

class GenericLinkedList<T> implements LinkedList<T>{
	public head:LinkedListNode<T>|null=null;

	public length(){return 5}
	public at(index:number):LinkedListNode<T>|null{return null}

	public insert(index:number,value:T):void{}
	public remove(index:number){}
	public getInfo(){};
}

const aList = new GenericLinkedList<number>();

aList.insert(0,123)
aList.insert(1,123)
aList.insert(0,123)
aList.insert(0,123)

let currentNode = aList.head

while(currentNode!==null){
	console.log(`Current node value : ${currentNode.value}`);
	currentNode = currentNode.next()
}

// 另一種寫法
class IterableLinkList<T> extends GenericLinkedList<T> implements Iterable<T>{
	public createIterator(){
		const elements:Array<T>=[];
		
		let currentNode = this.head;
		while(currentNode!==null){
			elements.push(currentNode.value);
			currentNode = currentNode.next();
		}
		return new NormalIterator(elements)
	}
}

function foreach<T>(iter:Iterator<T>,callback:(v:T)=>void){
	while(!iter.isDone()){
		callback(iter.currentItem as T);
		iter.next()
	}
}

let collection01 = new MyArray([1, 2, 3]);
let collection02 = new IterableLinkList<number>();
collection02.insert(0, 1)
collection02.insert(1, 2)
collection02.insert(2, 3)

let iter1 = collection01.createIterator()
let iter2 = collection02.createIterator()
foreach(iter1,v=>console.log(`value from clollection1:${v}`))
foreach(iter2,v=>console.log(`value from clollection2:${v}`))


// BinaryTree加上迭代器的實作
class BinaryTree<T> implements Iterable<T>{
	constructor(public root:TreeNode<T>){}

	// 宣告前序走訪成員方法
	public preorderTraversal(callback:(el:TreeNode<T>)=>void){
		this.preorderRecursive(this.root,callback);
	}

	private preorderRecursive(
		node:TreeNode<T>,
		callback:(el:TreeNode<T>)=>void
	){
		callback(node);
		if(node.leftNode !== null){
			this.preorderRecursive(node.leftNode,callback);
		}
		if(node.rightNode !== null){
			this.preorderRecursive(node.rightNode,callback);
		}
	}

	public createIterator(){
		const elements:Array<T>=[];

		this.preorderTraversal(node=>{
			elements.push(node.value);
		})
		return new NormalIterator(elements)
	}
}

class TreeNode<T>{
	public leftNode :TreeNode<T>|null=null;
	public rightNode :TreeNode<T>|null=null;
	public parent :TreeNode<T>|null=null;

	constructor(public value:T){}

	set left(value:T){
		this.leftNode = new TreeNode(value);
		this.leftNode.parent = this;
	}
	
	set right(value:T){
		this.rightNode = new TreeNode(value);
		this.rightNode.parent = this
	}
}

// 宣告TN為TreeNode<number>的化名
type TN = TreeNode<number>;

// 建構樹的根結點外，將該節點設為二元樹的點
const root = new TreeNode(1)
const aBTree = new BinaryTree(root);

root.left = 2;
(root.leftNode as TN).left = 3;
(root.leftNode as TN).right = 4;
((root.leftNode as TN).rightNode as TN).left = 5;

root.right = 6;
(root.rightNode as TN).left = 7;
((root.rightNode as TN).leftNode as TN).left = 8;
((root.rightNode as TN).leftNode as TN).right = 9;
(((root.rightNode as TN).leftNode as TN).rightNode as TN).left = 10;

// *出產的二元樹狀圖如附圖

// 一般使用手法
console.log('Normal Usage;');
const valueCumulation1:Array<number> = []

aBTree.preorderTraversal(n=>valueCumulation1.push(n.value))
console.log(valueCumulation1);

// 多型尋訪下的手法
console.log("polymorphic Iteration");
const valueCumulation2:Array<number>=[]
const aBTreeIter = aBTree.createIterator();

foreach(aBTreeIter,v=>valueCumulation2.push(v));
console.log(valueCumulation2);

// MyArray<T>、IterableLinkedList<T> 以及 BinaryTree<T> 這三種看似不可能用同個介面巡訪的方式 —— 藉由迭代器模式統一下來。
