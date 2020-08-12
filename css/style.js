/*CSS Reset*/
*{
    margin: 0;
    padding: 0;
}

/*CSS Variables*/
:root{
    --navbar-height: 59px;
}

/* Navigation Bar*/
#navbar{
    display: flex;
    align-items: center;
    position: relative;
    top: 0;
}

#navbar ul::before{
    content: "";
    background-color: black;
    position: absolute;
    height: 30%;
    width: 90%;
    z-index: -1;
    opacity: 0.7;

}
/* Navigation Bar: Logo and Image*/

#logo{
    margin: 10px 34px;

}

#logo img{
    height: 60px;
    margin: 3px 5px;

}
/*Navigation Bar: List Styling*/
#navbar{
    position: relative;
    
}

#navbar ul{
   display: flex;
   font-family: 'Baloo Bhai 2', cursive;
}

#navbar ul li{
    /*color: white*/
    list-style: none;
    font-size: 1.3rem;
}

#navbar ul li a{
    color: white;
    display: block;
    padding: 3px 22px;
    border-radius: 20px;
    text-decoration: none;
}

#navbar ul li a:hover{
    color:black;
    background-color: white;
}
/*Home Section*/
#home{
    display: flex;
    flex-direction: column;
    padding: 3px 200px;
    height: 400px;
    justify-content: center;
    align-items: center;
}

#home::before{
    content: "";
    position: absolute;
    background-image: url(../img/bg_1.jpg);
    background-repeat: no-repeat;
    background-repeat: repeat-x;
    height: 100%;
    top: 0px;
    left: 0px;
    width: 100%;
    z-index: -1;
    opacity: 0.89; 
   
}
#home h1{
    color: white;
    text-align: center;
    font-family: 'Bree Serif',Serif;
}
#home p{
    color: white;
    text text-align: center;
    font-size: 1.5rem;
    font-family: 'Bree Serif',Serif;
}
/*Services Section*/
#Services{
    margin: 34px;
    display: flex;
}
.box{
border: 2px solid brown;
padding: 34px;
margin: 3px 6px;
border-radius: 38px;
background: #f2f2f2;
display: grid;
}
 .box img{
    height: 150px;
    margin: auto;
    display: block;
}
.box{
    display: grid;
    grid-template-columns: 30% 30% 30%;

}
 .box p{
    font-family: 'Bree Serif',Serif;
}
/*Client Section*/
#client-section{
    height: 344px;

}
#client-section::before{
    content: "";
    position: absolute;
    background: url('https://cdn.pixabay.com/photo/2015/12/09/17/11/vegetables-1085063__340.jpg')no-repeat center center/cover;
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: center center/cover;
    height: 100%;
    width: 100%;
    z-index: -5;
    opacity: 0.4;
}
#clients{
    display: flex;
    justify-content: center;
    align-items: center;
}
.client-item{
    padding: 34px;
}
#clients img{
    height: 120px;
}
/*contact section*/
#contact{
    position: relative;

}

#contact::before{
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
    opacity: 0.7;
    background: url('https://cdn.pixabay.com/photo/2019/05/10/13/28/contact-us-4193523_960_720.jpg') no-repeat center center/cover;
    background-repeat: no-repeat;
    background-position: center;
    background-repeat: center/cover;
    
}
#contact-box{
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 34px;


}
#contact-box input,
#contact-box textarea{
    width: 100%;
    padding: 0.5rem;
    border-radius: 9px;
    font-size: 1.1rem;

}
#contact-box form{
    width: 40%;
}

#contact-box label{
    font-size: 1.3rem;
    font-family: 'Bree Serif',Serif;
}

footer{
    background: black;
    color: white;
    padding: 9px 20px;
}



/*Utility Classes*/
.h-primary{
    font-family: 'Bree Serif',Serif;
    font-size: 3rem;
    padding: 12px;

}
.h-secondary{
    font-family: 'Bree Serif',Serif;
    font-size: 3rem;
    padding: 12px;

}
.btn{
    padding: 6px 20px;
    border: 2px solid white;
    background-color:brown;
    color: white;
    margin: 17px;
    font-size: 1.3rem;
    border-radius: 10px;
    cursor: pointer;
}

.center{
    text-align: center;
}