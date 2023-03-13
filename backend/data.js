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
            
            name:'nike large shirt',
            category:'shirt',
            image:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            price: 120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality products',
            countInStock: 18,
            category: 'Shirts'
        },
        {
           
            name:'addidas slim shirt',
            category:'shirt',
            image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
            price: 150,
            brand:'Nike',
            rating:4.6,
            numReviews:11,   
            description:'high quality products',
            countInStock: 13,
            category: 'Shirts'
        },
        {
           
            name:'addidas slim shirt',
            category:'shirt',
            image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
            price: 150,
            brand:'Nike',
            rating:4.5,
            numReviews:10,   
            description:'high quality products',
            countInStock: 13,
            category: 'Shirts'
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
            category: 'Shirts'
        },
                
    ]
}

export default data;