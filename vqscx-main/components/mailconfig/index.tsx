import {Button, Card, Divider, Grid, Link, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Mailconfig = () => {
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
               <Text h2>Mail Configs</Text>
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
                              ATT
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
                     <Button data-sellix-product="639f3058f37ec" css={{}}>Purchase</Button>

                
               
                  </Card.Body>
               </Card>
               <Card  css={{p: '$6', mw: '400px', maxH: '200px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              AOL
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $45.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="639f2eeeb6d72" css={{}}>Purchase</Button>

                
               
                  </Card.Body>
               </Card>
               <Card css={{p: '$6', mw: '400px', maxH: '200px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Yahoo Config
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                          
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $50.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="63a44c40871af" css={{}}>Purchase</Button>

                
               
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
