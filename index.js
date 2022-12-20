// 客户端
import http from 'axios'


//1.http的请求方法 （get，post，put，delete）

// 2.请求路径（看服务端）

// 3.请求头部字段（看服务端）

// 4.请求体（x）

//111then（）方法链式调用
http.get('http://localhost:8080/user',{
    Headers:{
        aaa:'aaa'
    }
}).then(res => console.log(res.data))

// URL 传递需要注意的问题
// 协议 + ：// +域名（ip主机地址） + 端口号 + 资源相对路径
// http://localhost:80/user




//222打平
const username = 'aaa'
const password = '123456'

async function main() {
    const result = await http.get(`http://localhost:8080/user`, {
        headers: {
            aaa: 'aaa'
        },
        query: {
            password,
            username
        }
    })
    console.log(result.data)
}

main()