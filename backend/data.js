import bcrypt from 'bcryptjs';

const data={
    users: [
        {
          name: 'Basir',
          email: 'Admin@example.com',
          password: bcrypt.hashSync('01234', 8),
          isAdmin: true,
        },
        {
          name: 'Rajesh',
          email: 'Rajesh@example.com',
          password: bcrypt.hashSync('012345', 8),
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
            _id:'1',
            name:'nike slim shirt',
            category:'shirt',
            Image:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            price: 120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality products',
            countInStock: 18,
            category: 'Shirts'
        },
        {
            _id:'2',
            name:'add_idas slim shirt',
            category:'shirt',
            Image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
            price: 150,
            brand:'Nike',
            rating:4.6,
            numReviews:11,   
            description:'high quality products',
            countInStock: 13,
            category: 'Shirts'
        },
        {
            _id:'3',
            name:'puma slim shirt',
            category:'shirt',
            Image:'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
            price: 120,
            brand:'puma',
            rating:4.5,
            numReviews:11,
            description:'high quality products',
            countInStock: 12,
            category: 'Shirts'
        },
        {
            _id:'4',
            name:'nike slim shirt',
            category:'shirt',
            Image:'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
            price: 120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality products',
            countInStock: 15,
            category: 'Shirts'
        },
        {
            _id:'5',
            name:'reboka slim shirt',
            category:'shirt',
            Image:'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
            price: 120,
            brand:'reboka',
            rating:4.5,
            numReviews:11,
            description:'high quality products',
            countInStock: 10,
            category: 'Shirts'
        },
        {
            _id:'6',
            name:'nike slim shirt',
            category:'shirt',
            Image:'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
            price: 120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality products',
            countInStock: 10,
            category: 'Shirts'
        },
        {
            _id:'7',
            name:'reboka slim shirt',
            category:'shirt',
            Image:'https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg',
            price: 120,
            brand:'reboka',
            rating:4.5,
            numReviews:11,
            description:'high quality products',
            countInStock: 20,
            category: 'Shirts'
        },
        {
            _id:'8',
            name:'nike slim shirt',
            category:'shirt',
            Image:'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
            price: 120,
            brand:'Nike',
            rating:4.5,
            numReviews:10,
            description:'high quality products',
            countInStock: 15,
            category: 'Shirts'
        },
    ]
}

export default data;