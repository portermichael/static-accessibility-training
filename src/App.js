/**
 * In this file, we only import 'react' because we don't need anything to do with the DOM.
 */
 import React from 'react';
 import styled from 'styled-components';
 import images from './Images';
 
 // Exercise 2
 const primaryColor = '#1B6EF3';
 const backgroundColor = '#ffffff';
 
 const leftLinks = {
     color: primaryColor,
     border: 'none',
     backgroundColor: 'transparent',
     fontSize: '16px',
     display: 'block',
 };
 
 const baseFont = {
     color: primaryColor,
     backgroundColor: backgroundColor,
     fontSize: '20px',
 };
 
 const headerStyle = {
     height: '150px',
     textAlign: 'center',
     ...baseFont,
 }
 
 const disclaimerFont = {
     color: '#c3c6c9',
     fontSize: '6px',
     weight: 'bold',
 };
 
 const baseImage = {
     width: '100px',
     height: '100px',
 };
 
 const GridContainer = styled.div`
     display: grid;
     grid-template-rows: 100px 1fr 50px;
     width: 100%;
     min-width: 500px;
     height: 100%;
     min-height: 300px;
     font-family:"Comic Sans MS", "Comic Sans", cursive;
 `;
 
 const PageHeader = styled.div`
 `;
 
 const PageContent = styled.div`
     padding-top: 60px;
     display: grid;
     grid-template-columns: 2fr 5fr;
     height: 200px;
 
     /* @media (max-width: 1279px) {
         grid-template-columns: 1fr;
     } */
 `;
 const PageMenu = styled.div`
     display: grid;
     grid-template-columns: repeat(4, 1fr);
     padding-top: 50px;
 `;
 const PageAnchor = styled.a`
     display: grid;
     text-align: center;
     background-color: transparent;
 `;
 const PageMain = styled.div`
     display: grid;
     grid-template-rows: 1fr;
 `;
 const PageForm = styled.div`
     text-align: center;
 `;
 const PageFooter = styled.div`
 `;
 const HeroHeader = styled.div`
     padding-bottom: 12px;
     font-size: 16px;
     text-align: center;
     justify-content: center;
 `;
 const HeroOptions = styled.div`
     display: grid;
     grid-template-columns: repeat(3, 1fr);
     font-size: 12px;
 `;
 const HorizCenter = styled.div`
     text-align: center;
 `;
 
 const HeroOption = styled.div`
     display:grid;
     grid-template-rows: 100px;
     justify-content: center;
     height: 160px;
 `;
 
 const BulletPoint = styled.img`
     height: 20px;
     width: 20px;
     padding-right: 7px;
 `;

 const SignUpForm = styled.form`
    display: grid;
    grid-template-columns: 1fr;
 `;
 
 const LeftPanel = styled.div`
     color: primaryColor;
     border: none;
     background-color: none;
 `;
 
//  const VisuallyHidden = styled.span`
//      // this is essentially a hidden pixel
//      position: absolute;
//      clip: rect(1px 1px 1px 1px);  /* for Internet Explorer */
//      clip: rect(1px, 1px, 1px, 1px);
//      padding: 0;
//      border: 0;
//      height: 1px;
//      width: 1px;
//      overflow: hidden;
//  `;
 
 export default class App extends React.Component {
     constructor() {
         super();
         this.state = {
             name: null,
             email: null,
             checked: null,
             powers: this.getRandomIndexes(3),
             screenReaderMessages: null,
         };
        //  this.screenReaderTimeout = null;
     }
     reroll() {
        //  if (this.screenReaderTimeout) {
        //      clearTimeout(this.screenReaderTimeout);
        //  }
         const imgIndexes = this.getRandomIndexes(3);
        //  const imgNameArray  = this.getRandomSuperPowerNames(imgIndexes);
        //  const SuperPowerReRollMsg = <p>{`Rerolling super powers resulted in: ${imgNameArray}`}</p>;
         this.setState({ powers: imgIndexes });
        //  this.setState({ powers: imgIndexes, screenReaderMessages: SuperPowerReRollMsg });
        //  this.screenReaderTimeout = setTimeout(() => {
        //      this.setState({ screenReaderMessages: null })
        //  }, 5000)
     }
     getRandomIndexes(numberOfPowers) {
         const cardDeck = [];
         for(let i = 0; i < images.superPowers.length; ++i) {
             cardDeck.push(i);
         }
         const results = [];
         for(let i = 0; i < numberOfPowers; ++i) {
             const randIndex = Math.floor(Math.random() * cardDeck.length);
             const rand = cardDeck[randIndex];
             cardDeck.splice(randIndex, 1);            
             results.push(rand);
         }
         return results;
     }
     getRandomSuperPowers(powerIndexes) {
         const results = [];
         for(let i = 0; i < powerIndexes.length; ++i) {
             results.push(images.superPowers[powerIndexes[i]]);
         }
         return results.map((item)=>{
             return (<HeroOption key = {item.name}>
                         <img style={baseImage} src={item.img} />
                         <div> {item.name} </div>
             </HeroOption>);
         });
 
     }
    //  getRandomSuperPowerNames(powerIndexes) {
    //      const results = [];
    //      for(let i = 0; i < powerIndexes.length; ++i) {
    //          results.push(images.superPowers[powerIndexes[i]].name);
    //      }
    //      return results;
    //  }
     openLightbox(lightboxType) {
         // Pretend this opens a lightbox
         console.log(`Opening ${lightboxType} lightbox`)
     }
     render() {
         return (
             <div>
                 <GridContainer>
                     <PageHeader>
                         <div style={headerStyle} highlight>
                          <h1>Super Power Store</h1>
                         </div>
                     </PageHeader>
                     <PageContent>
                     <PageForm>
                         <SignUpForm>
                             <label htmlFor="name" id="Name"> Name: </label>
                             <input id="name"
                                         value={this.state.name}
                                         onChange={(e) => this.setState({ name: e.target.value })}/>
                             <div style={baseFont} id="Email"> Email: </div>
                             <input id="email"
                                         value={this.state.email}
                                         onChange={(e) => this.setState({ email: e.target.value })}/>
                             <div style={baseFont}> Agree to Conditions: </div>
                             <div>
                              <label htmlFor="agree">{"I agree to conditions"}</label>
                              <input style={baseFont}
                                  type = "checkbox"
                                  id="agree"
                                  checked={this.state.checked}
                                  onChange={(e) => this.setState({ checked: e.target.checked })}/>
                             </div>
                             <button style={baseFont} skin="primary">Sign Up</button>
                         </SignUpForm>
                     </PageForm>
                     <PageMain>
                             <HeroHeader>
                                 Sign up to gain the following powers:
                             </HeroHeader>
                             <HeroOptions>
                                 {this.getRandomSuperPowers(this.state.powers)}
                             </HeroOptions>
                             <HorizCenter>
                                 <svg xmlns="http://www.w3.org/2000/svg"
                                     width="24" height="24"
                                     viewBox="0 0 8 8"
                                     onClick={this.reroll.bind(this)}>
                                     <path d="M4 0c-2.2 0-4 1.8-4 4s1.8 4 4 4c1.1 0 2.12-.43 2.84-1.16l-.72-.72c-.54.54-1.29.88-2.13.88-1.66 0-3-1.34-3-3s1.34-3 3-3c.83 0 1.55.36 2.09.91l-1.09 1.09h3v-3l-1.19 1.19c-.72-.72-1.71-1.19-2.81-1.19z" />
                                 </svg>
                             </HorizCenter>
                     </PageMain>
                     </PageContent>
                     <PageFooter> 
                     <PageMenu>
                             <PageAnchor style={leftLinks} href = '/help' > 
                                 <BulletPoint src={images.superPowers[0].img} />Help
                             </PageAnchor>
                             <PageAnchor style={leftLinks} href="/contact" >
                                 <BulletPoint src={images.superPowers[0].img} />Contact Us
                             </PageAnchor>
                             <PageAnchor style={leftLinks} href='/feedback' >
                                 <BulletPoint src={images.superPowers[0].img} />Feedback
                             </PageAnchor>
                             <PageAnchor style={leftLinks} href='/subscribe' >
                                 <BulletPoint src={images.superPowers[0].img} />Subscribe
                             </PageAnchor>
                     </PageMenu>
                         <div highlight style={disclaimerFont}>
                             Warning: Gaining "Super Powers" may increase contact with super villians. SuperPowerStore.com is not responsible for actions, damages, injuries or crimes including: bank robbery, petty theft, world domination, vigilantiasm, civilian casualties or vehicular damage committed after distributing super powers. 
                         </div>
                         {/* <VisuallyHidden aria-live='assertive'>
                             {this.state.screenReaderMessages}
                         </VisuallyHidden> */}
                     </PageFooter>
                 </GridContainer>
             </div>
         );
     }
 }
 