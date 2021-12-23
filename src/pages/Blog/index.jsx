import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatPrice } from '../../util/format';
import * as CartActions from '../../store/modules/cart/actions';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Checkout from '../Checkout';
import styled from "styled-components";
import {
  MdRemoveCircleOutline,
  MdAddCircleOutline,
  MdDelete,
} from 'react-icons/md';
// import api from '../../services/api';

const ModalContent = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h1 {
    color: #5c3aff;
  }
`;


function Blog() {
  const [products, setProducts] = useState([]);
  const [isOpen, toggle] = useState(false);
  const amount = useSelector(state =>
    state.cart.reduce((sumAmount, product) => {
      sumAmount[product.id] = product.amount;

      return sumAmount;
    }, {}),
  );
  function handlOpenModal(open) {
    toggle(open);
  }
  
  const dispatch = useDispatch();

  useEffect(() => {
    async function loadProducts() {
//      const response = await api.get('products');

//      const data = response.data.map(product => ({
  const pro_article = [{id: 1, title: 'First',discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 160, color: '#54d4c9', image: './assets/img/almond.jpg'}
      ,{id: 2, title: 'Rosy-Fingered Dawn at Louse Point', discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 89.97, color: '#fd584a', image: './assets/img/irises.jpg'}
      ,{id: 3, title: 'Irises', discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 71.97, color: '#d4d7d6', image: './assets/img/painting.jpg'}
      ,{id: 4, title: 'Branches with Almond Blossom', discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 89.97, color: '#4d317f', image: './assets/img/rosy.jpg'}
      ,{id: 5, title: 'Branches with Almond Blossom', discription:" High-quality replica of The Starry Night by the Dutch post-impressionist painter Vincent van Gogh.", price: 187.97, color: '#3569a1', image: './assets/img/starry-night.jpg'}]

      const data = pro_article.map(product => ({
        ...product,
        priceFormatted: formatPrice(product.price),
      }));

      setProducts(data);
    }

    loadProducts();
  }, []);

  function handleAddProduct(id) {
    dispatch(CartActions.addToCartRequest(id));
   handlOpenModal(true)

  }



  const total = useSelector(state =>
    formatPrice(
      state.cart.reduce((totalSum, product) => {
        return totalSum + product.price * product.amount;
      }, 0),
    ),
  );

  const cart = useSelector(state =>
    state.cart.map(product => ({
      ...product,
      subtotal: formatPrice(product.price * product.amount),
    })),
  );



  function increment(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount + 1));
  }

  function decrement(product) {
    dispatch(CartActions.updateAmountRequest(product.id, product.amount - 1));
  }



  return (
    <>
      <Header />
      <div className="breadcrumb-option">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="breadcrumb__text">
                        <h2>BLOG</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section className="blog spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-8">
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="img/blog/baking1.jpg">
                            <div className="blog__pic__inner">
                                <div className="label">Recipes</div>
                                <ul>
                                    <li>By <span>medd</span></li>
                                       </ul>
                            </div>
                        </div>
                        <div className="blog__item__text">
                            <h2>Recent recipe</h2>
                            <p> coffee cake
We begin our countdown with coffee cakes at number ten. 
This cake comes as a perfect dessert for coffee lovers. 
They are delicious and are available in multiple coffee flavours such as Irish and Mocha</p>
                            <a href="/blogdetail">READ MORE</a>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="img/blog/ok.jpg">
                            <div className="blog__pic__inner">
                                <div className="label">Seasonal Recipes</div>
                                <ul>
                                    <li>By <span>Dre</span></li>
                                 </ul>
                            </div>
                        </div>
                        <div className="blog__item__text">
                            <h2>Bake by popular demand</h2>
                            <p>So you're thinking about seasonal recipes....<br/>
                        </p>
                            <a href="/blogdetail">READ MORE</a>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="img/blog/baking5.jpg">
                            <div className="blog__pic__inner">
                                <div className="label">Bake By popular demand</div>
                                <ul>
                                    <li>By <span>maria</span></li>
                                      </ul>
                            </div>
                        </div>
                        <div className="blog__item__text">
                            <h2>recipe myths</h2>
                            <p>First thing's first, since making and decorating a cake can be quite a bit of work,<br/>
                                 it's not a bad idea to split the job into stages. <br/>
                                For example, bake it on a Monday and freeze it,</p>
                            <a href="/Blogdetail2">READ MORE</a>
                        </div>
                    </div>
                    <div className="blog__item">
                        <div className="blog__item__pic set-bg" data-setbg="img/blog/blog-4.jpg">
                            <div className="blog__pic__inner">
                                <div className="label">Recipes</div>
                                <ul>
                                    <li>By <span>Blair</span></li>
                                     </ul>
                            </div>
                        </div>
                        <div className="blog__item__text">
                            <h2>Freezing your cakes</h2>
                            <p>A cake turntable is literally a rotating platter that you use to turn the cake while leveling and frosting it.<br/> 
                                Turning the cake rather than having to walk all around the cake makes the whole process much easier.</p>
                            <a href="/blogdetail">READ MORE</a>
                        </div>
                    </div>
                   
                </div>
                <div className="col-lg-4">
                    <div className="blog__sidebar">
                        
                        <div className="blog__sidebar__item">
                            <h5>Follow me</h5>
                            <div className="blog__sidebar__social">
                                <a href="#"><i className="fa fa-facebook"></i></a>
                                <a href="#"><i className="fa fa-twitter"></i></a>
                                <a href="#"><i className="fa fa-youtube-play"></i></a>
                                <a href="#"><i className="fa fa-instagram"></i></a>
                            </div>
                        </div>
                        
                        <div className="blog__sidebar__item">
                            <h5>Categories</h5>
                            <div className="blog__sidebar__item__categories">
                                <ul>
                                    <li><a href="#">Repice <span>36</span></a></li>
                                    <li><a href="#">Guides <span>18</span></a></li>
                                    <li><a href="#">News <span>09</span></a></li>
                                    <li><a href="#">Videos <span>12</span></a></li>
                                    <li><a href="#">Trending <span>27</span></a></li>
                                </ul>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </section>
   

      <Footer />
    </>
  );
}

export default Blog;
