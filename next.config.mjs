// /** @type {import('next').NextConfig} */
// const module = {
//     images:{
//         remotePatterns:[
//             {
//                 protocol:'https',
//                 hostname:'www.themealdb.com',
//                 port:'',
//                 pathname:'/images/**'
//             },
//         ],
//     },


// };





// export default module;

// // https://www.themealdb.com/images/category/beef.png









/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'www.themealdb.com',
          port: '',
          pathname: '/images/**'
        }
      ]
    }
  };
  
  
  export default function () {
    return nextConfig;
  }
  