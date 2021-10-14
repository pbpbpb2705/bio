import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Banner extends Component {
    render() {
        return (
            <div className="row ">
                <div className="medium-12 columns">
                    <div class="wrapper row0">
                        <div id="topbar" class="hoc clear">
                            <div class="fl_left">
                                <ul class="nospace">
                                    <li><i class="fas fa-phone rgtspace-5"></i> +00 (123) 456 7890</li>
                                    <li><i class="far fa-envelope rgtspace-5"></i> info@domain.com</li>
                                </ul>
                            </div>
                            <div class="fl_right">
                                <ul class="nospace">
                                    <li><a href="index.html"><i class="fas fa-home"></i></a></li>
                                    <li><a href="#" title="Help Centre"><i class="far fa-life-ring"></i></a></li>
                                    <li><a href="#" title="Login"><i class="fas fa-sign-in-alt"></i></a></li>
                                    <li><a href="#" title="Sign Up"><i class="fas fa-edit"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <section id="banner-journal" class="banner">
                        <div class="bg-color-journal">
                            <nav class="navbar navbar-default navbar-fixed-top">
                                <div class="container">
                                    <div class="col-md-12">
                                        <div class="navbar-header">
                                            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                                <span class="icon-bar"></span>
                                            </button>
                                            <a class="navbar-brand" href="#"><img src="img/logo.png" class="img-responsive" style={{ width: '140px', marginTop: '-16px' }} /></a>
                                        </div>
                                        <div class="collapse navbar-collapse navbar-right" id="myNavbar">
                                            <ul class="nav navbar-nav">
                                                <li class="active"><a href="#Home">Home</a></li>
                                                <li class=""><a href="Mainjournal">The Journal</a></li>
                                                <li class=""><a href="#about">Daily Checklist</a></li>
                                                <li class=""><a href="#testimonial">Mood State</a></li>
                                                <li class=""><a href="#contact">Your account</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </nav>
                            <div class="container">
                                <div class="row">
                                    <div class="banner-info">
                                        <div class="banner-logo text-center">
                                            <img src="img/logo.png" class="img-responsive" />
                                        </div>
                                        <div class="banner-text text-center">
                                            <h1 class="white">Your Journal Today</h1>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod <br />tempor incididunt ut labore et dolore magna aliqua.</p>
                                        </div>
                                        <div class="overlay-detail text-center">
                                            <a href="#service"><i class="fa fa-angle-down"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}
export default Banner;