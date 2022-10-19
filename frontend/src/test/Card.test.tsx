import { render, screen } from '@testing-library/react';
//
// describe('testing card component', () => {
//     const blog = {
//         "image": {
//             "url": "https://res.cloudinary.com/emmanuel-cloud-storage/image/upload/v1661525974/j6zxwa6gqa0vlrjhzdvc.jpg",
//             "public_id": "blogImage/qnzbvyr3egyyxvazkzr6"
//         },
//         "_id": "63176095b15e3c38fa411215",
//         "title": "Blog Post 2!",
//         "body": "This is a test post!",
//         "readTime": 4,
//         "author": "Emmanuel Okuchukwu",
//         "likes": 0,
//         "__v": 0,
//         "createdAt": "2022-09-06T15:00:37.131Z",
//         "updatedAt": "2022-09-06T15:00:37.131Z"
//     };
//
//     test('text rendering', async() => {
//         const text = render(<Card blog={blog} />);
//
//         expect(text.container).toHaveTextContent(blog.title);
//     });
// });