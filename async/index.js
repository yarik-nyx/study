const zxc = async function(){
    console.log('start');
    const res = await fetch('https://jsonplaceholder.typicode.com/photos')
    const q = res
    console.log('finish')
}
zxc()