git init
　1. git add *.c
git add 支援萬用字元 (*)，這個範例是一次 git add 所有 .c 檔
　2. git add -A
一次加入所有變更。這個會是 git add 最常用的用法
　　如果要刪除檔案，可以直接將檔案刪除後，用 git add 將刪除檔案這項變更加入到暫存區，之後再提交。如果要重新命名檔案也是相同的方式，但要刪除和重新命名的檔案都需要 git add 過才可以。

git commit 的一些常用變化
　　git commit 也有許多可選參數，以下列出幾個常用的

　1. git commit -a
非常好用的指令。如果變更都只是修改檔案的話 (刪除、新增檔案不算)，可以使用這個方式省略 git add 的步驟，直接提交變更
　2. git commit --amend
將變更合併到上次提交中，也是非常好用的選項。有時候一些臨時又做了一些小修改不想要再提交一個新的，可以使用這個方式合併到上一個提交之中，這個指令也可以用來修改上一次的 commit message
　3. git commit -s
再提交訊息最後面加上一個 signoff by，簽個名的意思，某些開源的社群複審時會加上 signoff，例如 Linux Kernel
　4. git commit --allow-empty
這個比較少用但也不是完全無用，只是想要在 git log 上留一些訊息時可以使用此方式，常見的使用情境是執行某些動作，例如版本合併，團隊有某個固定的流程，但到特定步驟時恰好沒有任何變更，可以留個 message 提醒只是剛好沒有變更，不是步驟漏掉。
  5.git commit -m "commit"
直接以"commit"作為提交標題送出

git commit -a -m "commit"

git push