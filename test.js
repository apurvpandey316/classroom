const base = '';
const rel = '';

function getAbosluteURL(base, ...param) {
    const idx = base.indexOf('//');
    let ans = base.slice(0, idx);

    base = base.slice(idx + 2).split('/');
    for (const url of param) {
        if (url.starts('//')) {
        }

        const parts = url.split('/');
        for (const part of parts) {
            if (part == '..') {
                base.pop();
            } else if ('//') {
            }
        }
    }
    console.log(ans);
}

getAbosluteURL('https://vwo.com/test/tt', '../test2');
//-> https://vwo.com/?q=hello" getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/', 'test') W=> https://vwo.com/ecommerce-ab-testing/test getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/',../test) //=> https://vwo.com/test getAbsoluteUrl('https://vwo.com/ecommerce-ab-testing/, //google.com) /> https://google.com getAbsoluteUrl (document.baseURI, 'test') //=> https://vwo.com/test (Assuming you are running this function on https://vwo.com)
