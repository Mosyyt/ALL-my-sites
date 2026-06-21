import {Button, Card, Divider, Grid, Link, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Streaming = () => {
   return (
      <>
      <script src="https://cdn.sellix.io/static/js/embed.js"></script>
    <link href="https://cdn.sellix.io/static/css/embed.css" rel="stylesheet" />
         
         <Flex
            css={{py: '$20', gap: '1rem', px: '$6'}}
            justify={'center'}
            wrap={'wrap'}
            direction={'column'}
            align={'center'}
         >
            <Flex direction={'column'} align={'center'}>
               <Text span css={{color: '$blue600'}}>
                  VQS
               </Text>
               <Text h2>Streaming/Prn Config</Text>
            </Flex>

            <Flex
               css={{gap: '2rem', width: '100%'}}
               wrap={'wrap'}
               justify={'center'}
            >
               <Card  css={{p: '$6', mw: '400px', maxH: '200px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              BrattySis Config
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $25.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="639f2be876fe8" css={{}}>Purchase</Button>

                
               
                  </Card.Body>
               </Card>
               <Card  css={{p: '$6', mw: '400px', maxH: '200px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Fansly Config
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $30.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="639f2d7219022" css={{}}>Purchase</Button>

                
               
                  </Card.Body>
               </Card>
               <Card  css={{p: '$6', mw: '400px', maxH: '200px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Dazn Config
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $30.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="639f2f9dcc11d" css={{}}>Purchase</Button>

                
               
                  </Card.Body>
               </Card>
               <br></br>
               <br></br>
               <Card  css={{p: '$6', mw: '400px', maxH: '200px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              NBA Config
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $30.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="63ad8c839a721" css={{}}>Purchase</Button>

                
               
                  </Card.Body>
               </Card>
               <Card  css={{p: '$6', mw: '400px', maxH: '200px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Hulu Config
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $30.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="63a9777f2967e" css={{}}>Purchase</Button>

                
               
                  </Card.Body>
               </Card>
               
               
               
            </Flex>
            
         </Flex>
         
         

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
      
   );
   
};
