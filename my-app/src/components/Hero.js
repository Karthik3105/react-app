import React, { Component } from 'react';

function Hero({heroName}){
   if(heroName === 'Joker'){
    throw new Error('sdf');
   }
        return (
            <div>
              {heroName}
            </div>
        );
    
}

export default Hero;