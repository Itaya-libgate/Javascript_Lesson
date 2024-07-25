// JavaScriptファイルをブラウザ上のコンソールで使用できるかの確認
let main = 'hello'; // 常に1:1
console.log(main);

// 定数
const Second = 'hello2'; // 常に1:1
console.log(Second);

// 配列
let array = ['hello', 'hello2', 'hello3'];
console.log(array);
console.log(array[2]); // 配列の特定の場所を出力
console.log(array[0]); // 配列の特定の場所を出力

// ループ文
let index = 0;
while(index < 5){
  // 繰り返したい命令
  console.log(index);
  index ++;
}

// ループ文と配列の組み合わせ
let index2 = 0;
while(index2 < array.length){
  // arrayの要素を出力する
  console.log(array[index2]);
  index2 ++;
}

// if else文
if(array.length > 2){
    console.log('でたー！')
  } else {
    console.log('でないー！')
  }


// 関数
// 関数とはボタン押下時など、一定のタイミングで何かしらの実行させたいときによく使う
const test = () => {
  // ここに実行したい命令を書く
}
test();

// 関数の例(引数なし)
const test2 = () => {
  if(array.length > 2){
    console.log('でたー！')
  } else {
    console.log('でないー！')
  }
}
test2();

// 関数の例（引数あり）
// 上の関数の定義式だと、条件の値が既に入力してしまっているため、汎用性に欠ける
// 引数を使用することで、流用が効くようになる。
const test3 = (arg) => {
  if(array.length > arg){
    console.log('でたー！')
  } else {
    console.log('でないー！')
  }
}
test3(5);

// オブジェクト（変数とか定数とかの派生したものと考えていい）
// 変数や定数は1:1なのに対して、オブジェクトは複数の値を持つことができる　＝　データの塊
// オブジェクト内に関数も入れることができる
const test4 = {
  name: 'hello',
  age: 28,
  from: 'Japan',
  // 関数を挿入する
  test5: () => {
    console.log('test5');
  }
}
console.log(test4);
console.log(test4.name);
console.log(test4.test5());


// documentオブジェクト
// ブラウザ上のHTML要素を操作するためのオブジェクト
console.log(document.getElementsByTagName('button'))

// eventオブジェクト
// 何かボタンをクリックしたときに、画面をスクロールしたときなど、ユーザーが何かをしたときに何らかの挙動を追加する際に使うオブジェクト
document.getElementsByTagName('button')[0].addEventListener('click', ()=> {
  // 何らかの挙動が起きたときの処理を記述する
  window.alert('Hello World');
});//addEventListenerには引数が２つ設定しないといけない　1つ目：eventのタイプを入れる(例)：クリックする（click）)　2つ目：