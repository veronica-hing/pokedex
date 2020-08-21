import React, {Component} from 'react';
import styled from 'styled-components';

export default class Footer extends Component{
  render(){
    return(
      <div>
        <footer className = "footer-expand-md dark bg-dark fixed-bottom">
          <div class = 'container'>
            <div class = 'row'>
            <div className = 'col-2' style = {{color: 'white'}}>
              <div className = 'align-items-center'>
                Resources:
              </div>
            </div>
              <div className = 'col'>
                <div className = 'align-items-center'>
                  <a href = 'http://lowgif.com/70927dd7c1a165dc.html' target = '_blank'>
                    Pokeball gif by Owen Arnold
                  </a>
                </div>
              </div>
              <div class = 'col' style = {{color: 'white'}}>
                <a href = 'https://www.youtube.com/watch?v=XehSJF85F38&t=5681s' target =    '_blank'>
                Try Chris Stayte's tutorial!
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
