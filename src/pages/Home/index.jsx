import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

function Home() {
 
  return (
    <>
      <Header />
      <section className="hero">
        <div className="hero__slider owl-carousel">
            <div className="hero__item set-bg" data-setbg="img/hero/hero-1.jpg">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-lg-8">
                            
                        </div>
                    </div>
                </div>
            </div>
        </div> 
    </section>

    <section className="about spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 col-md-6">
                    <div className="about__text">
                        <div className="section-title">
                            <span>our aim</span>
                            <h2>To encourage more and more people to start baking from their homes!</h2>
                        </div>
                        <p>So this website is to avail all the necessary tools and ideas for baking.</p>
                    </div>
                </div>
                 <div className="categories">
        
    </div>
                <div className="col-lg-6 col-md-6">
                    <div className="about__bar">
                        <div className="about__bar__item">
                            <p>Cake recipes</p>
                            <div id="bar1" className="barfiller">
                                <div className="tipWrap"><span className="tip"></span></div>
                                <span className="fill" data-percentage="95"></span>
                            </div>
                        </div>
                        <div className="about__bar__item">
                            <p>Customer service</p>
                            <div id="bar2" className="barfiller">
                                <div className="tipWrap"><span className="tip"></span></div>
                                <span className="fill" data-percentage="80"></span>
                            </div>
                        </div>
                        <div className="about__bar__item">
                            <p>customer satisfaction</p>
                            <div id="bar3" className="barfiller">
                                <div className="tipWrap"><span className="tip"></span></div>
                                <span className="fill" data-percentage="90"></span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <div className="categories">
        <div className="container">
            <div className="row">
                <div className="categories__slider owl-carousel">
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-029-cupcake-3"></span>
                            <h5>Cupcake</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-034-chocolate-roll"></span>
                            <h5>Butter</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-005-pancake"></span>
                            <h5>Red Velvet</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-030-cupcake-2"></span>
                            <h5>Biscuit</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-006-macarons"></span>
                            <h5>Donut</h5>
                        </div>
                    </div>
                    <div className="categories__item">
                        <div className="categories__item__icon">
                            <span className="flaticon-006-macarons"></span>
                            <h5>Cupcake</h5>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <section className="product spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/flour1.jpg">
                            <div className="product__label">
                               
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Baking Flour</a></h6>
                            <div className="product__item__price">£32.00</div>
                            <div className="cart_add">
                                 </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/flour2.jpg">
                            <div className="product__label">
                               
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">super</a></h6>
                            <div className="product__item__price">£30.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/flour3.jpg">
                            <div className="product__label">
                                
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Measuring Cups</a></h6>
                            <div className="product__item__price">£31.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-4.jpg">
                            <div className="product__label">
                                <span>Cupcake</span>
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Cookie Dough</a></h6>
                            <div className="product__item__price">£25.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/shopping.png">
                            <div className="product__label">
                               
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">baking spoons</a></h6>
                            <div className="product__item__price">£05.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-6.jpg">
                            <div className="product__label">
                              </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Chocolate recipe</a></h6>
                            <div className="product__item__price">£14.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-7.jpg">
                            <div className="product__label">
                                </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Red velvet</a></h6>
                            <div className="product__item__price">£32.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-6">
                    <div className="product__item">
                        <div className="product__item__pic set-bg" data-setbg="img/shop/product-8.jpg">
                            <div className="product__label">
                            </div>
                        </div>
                        <div className="product__item__text">
                            <h6><a href="#">Mud Recipe</a></h6>
                            <div className="product__item__price">£08.00</div>
                            <div className="cart_add">
                                <a href="#">Add to cart</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

   

   

    <section className="instagram spad">
        <div className="container">
            <div className="row">
                <div className="col-lg-4 p-0">
                    <div className="instagram__text">
                        <div className="section-title">
                            <span>Follow us on instagram</span>
                          
                        </div>
                        <h5><i className="fa fa-instagram"></i> @get-baking</h5>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="img/instagram/instagram-1.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic middle__pic">
                                <img src="img/instagram/instagram-2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="img/instagram/c3.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                                <img src="img/instagram/c2.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic middle__pic">
                                <img src="img/instagram/cc.jpg" alt=""/>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-4 col-sm-4 col-6">
                            <div className="instagram__pic">
                               
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

export default Home;
