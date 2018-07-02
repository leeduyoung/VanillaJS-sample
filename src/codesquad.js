import Blog from './blog/blog';

console.log('test');
const blog = new Blog();

function test() {
    let itemList = [1,2,3,4,5];
    let sum = 0;
    for(let item of itemList) {
        sum += item;
    }
    console.log(`총 합은 ${sum}입니다!`);

    console.log(blog.getData());
}
test();