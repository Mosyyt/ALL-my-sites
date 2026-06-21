import {Button, Card, Divider, Grid, Link, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Fullz = () => {
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
               <Text h2>Fullz</Text>
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
                              Full Info 2023-2024
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $10.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="63efc1a254b0c" css={{}}>Purchase</Button>

                
               
                  </Card.Body>
               </Card>
               <Card css={{p: '$6', mw: '400px', maxH: '200px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Full Info 2025-2026
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                        
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $12.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="63efcf845e148"  css={{}}>Purchase</Button>

                
               
                  </Card.Body>
               </Card>
               <Card css={{p: '$6', mw: '400px', maxH: '200px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Full Info 2027-2028
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                          
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $15.00
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        
                     </Text>
                     <Button data-sellix-product="63efcfed1fc4e" css={{}}>Purchase</Button>

                
               
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
