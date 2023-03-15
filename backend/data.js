import bcrypt from 'bcryptjs';

const data={
    users: [
        {
          name: 'sridhar',
          email: 'Admin@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: true,
        },
        {
          name: 'John',
          email: 'user@example.com',
          password: bcrypt.hashSync('1234', 8),
          isAdmin: false,
        },
      ],
  
    products:[
        
        {
           
            name:'addidas Gray Jumper',
            category:'Jumper',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/14.webp',
            price: 150,
            brand:'Nike',
            rating:4.6,
            numReviews:10,   
            description:'high quality products',
            countInStock: 13,
        },
        {
           
            name:'nike Black Jeans Jacket',
            category:'Jacket',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/15.webp',
            price: 100,
            brand:'Nike',
            rating:4.6,
            numReviews:10,   
            description:'high quality products',
            countInStock: 13,
        },
        {
            
            name:'puma slim ',
            category:'shirt',
            image:'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
            price: 120,
            brand:'puma',
            rating:4.5,
            numReviews:11,
            description:'high quality products',
            countInStock: 12,
        },
        {
            
            name:'puma slim ',
            category:'shirt',
            image:'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
            price: 125,
            brand:'puma',
            rating:4.5,
            numReviews:11,
            description:'high quality products',
            countInStock: 12,
        },
        {
            
            name:'puma Ripped jeans ',
            category:'jeans',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.webp',
            price: 1020,
            brand:'puma',
            rating:4.5,
            numReviews:11,
            description:'high quality products',
            countInStock: 12,
        },
        {
            
            name:'puma Red chinos ',
            category:'shirt',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.webp',
            price: 1210,
            brand:'puma',
            rating:4.5,
            numReviews:11,
            description:'high quality products',
            countInStock: 12,
        },
        {
            
            name:'Nike Ripped jeans ',
            category:'jeans',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/11.webp',
            price: 1120,
            brand:'Nike',
            rating:4.8,
            numReviews:11,
            description:'high quality products',
            countInStock: 12,
        },
        {
            
            name:'Adiddas Red  ',
            category:'shirt',
            image:'https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/5.webp',
            price: 1210,
            brand:'Adiddas',
            rating:4.7,
            numReviews:11,
            description:'high quality products',
            countInStock: 12,
        },
                
    ]
}

export default data;