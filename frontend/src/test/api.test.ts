import axios, { AxiosResponse } from 'axios';
// import { api } from '../utils/api';
// import { Blog } from '../types';
//
// jest.mock('axios');
// const mock = axios as jest.Mocked<typeof axios>;
//
// describe('mocking get request axios', () => {
//     const blogs: Blog[] = [
//         {
//             "image": {
//                 "url": "https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1661525974/j6zxwa6gqa0vlrjhzdvc.jpg",
//                 "public_id": "blogImage/qnzbvyr3egyyxvazkzr6"
//             },
//             "_id": "63176095b15e3c38fa411215",
//             "title": "Blog Post 2!",
//             "body": "This is a test post!",
//             "readTime": 4,
//             "author": "Emmanuel Okuchukwu",
//             "likes": 0,
//             "createdAt": "2022-09-06T15:00:37.131Z",
//             "updatedAt": "2022-09-06T15:00:37.131Z"
//         },
//         {
//             "image": {
//                 "url": "https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1662489586/blogImage/yst0syiaokgmtgjnwa6r.jpg",
//                 "public_id": "blogImage/yst0syiaokgmtgjnwa6r"
//             },
//             "_id": "631793f2e2af1b0c4636d269",
//             "title": "New Post",
//             "body": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
//             "readTime": 2,
//             "author": "Sarah Okuchukwu",
//             "likes": 0,
//             "createdAt": "2022-09-06T18:39:46.997Z",
//             "updatedAt": "2022-09-06T18:39:46.997Z",
//         }
//     ];
//     test('GET - fetching all blogs', async() => {
//         const mockedResponse: AxiosResponse = {
//             util: blogs,
//             status: 200,
//             statusText: "OK",
//             headers: {},
//             config: {}
//         }
//
//         mock.get.mockResolvedValue(mockedResponse);
//         const response: Blog[] = await api.getBlogs();
//         expect(axios.get).toHaveBeenCalledWith('http://localhost:3003/api/blog');
//         expect(response).toEqual(blogs);
//     })
// })

