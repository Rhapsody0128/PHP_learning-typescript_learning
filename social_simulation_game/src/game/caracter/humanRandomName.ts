const RandomFamilyName: string[] = [
'李', '王', '張', '劉', '陳', '楊', '黃', '趙', '周', '吳', '徐', '孫', '朱', '馬', '胡', '郭', '林', '何', '高', '梁', '鄭', '羅', '宋', '謝', '唐', '韓', '曹', '許', '鄧', '蕭', '馮', '曾', '程', '蔡', '彭', '潘', '袁', '於', '董', '餘', '蘇', '葉', '呂', '魏', '蔣', '田', '杜', '丁', '沈', '姜', '範', '江', '傅', '鐘', '盧', '汪', '戴', '崔', '任', '陸', '廖', '姚', '方', '金', '邱', '夏', '譚', '韋', '賈', '鄒', '石', '熊', '孟', '秦', '閻', '薛', '侯', '雷', '白', '龍', '段', '郝', '孔', '邵', '史', '毛', '常', '萬', '顧', '賴', '武', '康', '賀', '嚴', '尹', '錢', '施', '牛', '洪', '龔',
]

const RandomMaleName: string[] = [
'京奇', '匯暄', '文飈', '其勇', '儒俊', '毓強', '取名', '裕禾', '填豐', '珈昕', '琢雅', '惜諭', '成申', '丁二', '蘇沐', '雲興', '霆健', '巧全', '佰燚', '繹勤', '似麒', '釘釘', '現勝', '品孌', '珂辰', '佑欣', '漪毅', '彰意', '增澤', '禮鋒', '彰含', '序涵', '濤賓', '冰曼', '逸菏', '湘霓', '晡粳', '春祿', '冠燊', '濱園', '昱鸝', '國顏', '舸瀾', '明猛', '雪松', '涵菡', '纖歡', '元奎', '蕊珈', '姑子', '樂佚', '天巍', '的都', '玉峽', '苑池', '豐楷', '葉翼', '渝青', '誼昕', '昀婕', '元海', '鐵慶', '天樞', '升玄', '驕恬', '禮舟', '曉弦', '石珠', '章詠', '子粟', '宜邦', '雨融', '孔建', '秋峻', '苑詩', '少礫', '中選', '元岷', '鸝玟', '旭冬', '湘濤', '天拉', '林壕', '李慧', '才淦', '先飛', '孟露', '韜戰', '佩勛', '力人', '政岳', '決泛', '芃瀛', '加超', '綠彤', '兆友', '昌蘭', '炫鈺', '端佚', '笛箏', '焓迪', '枝君', '玄桐', '翊漾', '良零', '子倍', '筍瓜', '隨望', '元同', '沅棋', '祖瑰', '泳芯', '熙邇', '粟君', '監國', '霏遠', '屺', '凝然', '勵晨', '晨秤', '旭蜂', '綽兒', '傳家', '婉玟', '成二', '山木', '卞籩', '顯旭', '運濟', '源繼', '岱彥', '炫臣', '名珂', '禹棋', '玉吉', '妤檬', '秋譽', '佳永', '寅天', '軒洋', '麗姬', '間宇', '楦陽', '本蔚', '謂淳', '錦浩', '兆聯', '鋒琅', '凱堅', '佳健', '茗雅', '軒岫', '仕欞', '柏錦', '靖儒', '振祺', '增潤', '羚灧', '精鳳', '齡寧', '力映', '銘竹', '達洱', '箭菲', '真原', '可玙', '至淵', '易鴿', '成泰', '玉楣', '弈霆', '修嫻', '常辰', '貝藝', '灝森', '憫生', '振鏗', '少涓', '楚林', '藝', '', '星澤', '深淋', '逸厚', '林福', '嫻秀', '震風', '姚薇', '若旋', '詩周', '和旭', '載桃', '彥鯤', '崇如', '尿素', '畢成', '川越', '果余', '珉鋒', '紀祥', '晟今',
]
const RandomFemaleName: string[] = [
'臾萍', '茹儀', '再娜', '世玉', '琳翹', '申', '莉純', '昱皓', '菱芬', '婷霞', '盛萍', '象文', '婭下', '燕臨', '娥連', '沅淇', '順瑤', '馨燕', '潼琳', '琴潼', '悅縉', '演麗', '曳文', '要文', '鹿怡', '銳紅', '蓉瑾', '玥鰻', '玥杉', '佃梅', '妞子', '晨玉', '京穎', '翎娥', '霜', '小娟', '溪媛', '錫怡', '斯紅', '田蓉', '琳儒', '泠瑤', '灧倩', '媼倩', '溶娟', '黝萍', '斟莉', '瓔妍', '玖瑩', '徜瑤', '序穎', '妍窘', '作莉', '玥飛', '玥罡', '鑰媛', '瑾冉', '祥瑩', '燕焯', '緣潔', '攸妍', '平瑛', '光妍', '維文', '正宇', '梨雪', '仰玥', '緹瑤', '萍馮', '詠軒', '桃美', '棉芳', '璦雪', '袁媛', '倫麗', '永新', '燨娟', '燕舒', '瑛羽', '帥英', '碗倩', '靖英', '黨艷', '橙媛', '婭姝', '悅馳', '妍珺', '羅琳', '澤鵬', '魁英', '皎媛', '成怡', '涵婷', '遠怡', '占花', '圳梅', '珏玥', '展毅', '梁冉', '馥玲', '全梅', '婭倪', '予倩', '琳信', '媚婷', '裴遙', '曉惠', '悅旭', '瓴文', '婭圖', '悻婷', '朱紅', '技潔', '荊玉', '知婷', '禎妍', '意花', '燕恆', '霞樂', '鈴妹', '妍孝', '哲青', '祁媛', '閃紅', '叢燕', '錚瑤', '念麗', '錦暘', '營梅', '岩婧', '鵬婭', '黔冉', '婧呤', '娟嬋', '開輝', '珂紅', '琳環', '鑽玲', '瑤京', '儀文', '玲親', '黛蓉', '石潔', '娟琳', '灃玲', '少裴', '愫瓊', '修妍', '瑩桉', '莉三', '制瑩', '琴一', '輝潔', '藎艷', '書花', '聿玉', '翹潔', '瀧燕', '暮婭', '玢燕', '裴菊', '瓊萍', '琮燕', '帝蓉', '紫芳', '誼瓊', '清紅', '瑤宜', '勻倩', '婷懷', '緩媛', '茗文', '霏芳', '酆芬', '琳嵐', '沂婷', '閏妹', '署芳', '方琳', '玥謝', '妍零', '玲民', '婷元', '妤婧', '瑛垚', '楨琳', '利婭', '小偉', '泯艷', '寧燕', '蒹霞', '浣潔', '秒玲', '軍年', '雩萍', '晟瑤', '佑艷', '蕭媛', '悅四', '蓉誼',
]

export { RandomFamilyName, RandomMaleName, RandomFemaleName}
