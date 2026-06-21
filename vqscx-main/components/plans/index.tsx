import {Button, Card, Divider, Grid, Link, Text} from '@nextui-org/react';
import React from 'react';
import {CheckIcon} from '../icons/CheckIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Plans = () => {
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
               <Text h2>VPS Servers</Text>
            </Flex>

            <Flex
               css={{gap: '2rem', width: '100%'}}
               wrap={'wrap'}
               justify={'center'}
            >
               <Card css={{p: '$6', mw: '400px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Basic
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           <Text css={{color: '$accents8'}}>
                             Our cheapest and most affordable light weight server. Perfect for just starting out.
                           </Text>
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $14.99{' '}
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        /mo
                     </Text>
                     <Button css={{mt: '$7', mb: '$12'}}>Coming Soon</Button>

                     <Divider />
                     <Box as={'ul'}>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              2 Cores
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                           4GB Ram
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                             20GB SSD
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Unlimited Bandwidth
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                             USA IP
                           </Text>
                        </Flex>
                     </Box>
                  </Card.Body>
               </Card>
               <Card css={{p: '$6', mw: '400px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Premiun
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           <Text css={{color: '$accents8'}}>
                             Up your game a little bit with our premium server, giving you more raw power.
                           </Text>
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $24.99{' '}
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        /mo
                     </Text>
                     <Button  css={{mt: '$7', mb: '$12'}}>Coming Soon</Button>

                     <Divider />
                     <Box as={'ul'}>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              4 Cores
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              8GB Ram
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              50GB SSD
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Unlimited Bandwidth
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              USA IP
                           </Text>
                        </Flex>
                     </Box>
                  </Card.Body>
               </Card>
               <Card css={{p: '$6', mw: '400px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Elite
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           <Text css={{color: '$accents8'}}>
                              Get the most out of our servers with the Elite plan, experience even more power.
                           </Text>
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        $34.99{' '}
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        /mo
                     </Text>
                     <Button css={{mt: '$7', mb: '$12'}}>Coming Soon</Button>

                     <Divider />
                     <Box as={'ul'}>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              6 Cores
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              16GB Ram
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              120GB SSD
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Unlimited Bandwidth
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                             USA IP
                           </Text>
                        </Flex>
                     </Box>
                  </Card.Body>
               </Card>
               <Card css={{p: '$6', mw: '400px'}}>
                  <Card.Header>
                     <Grid.Container css={{pl: '$6'}}>
                        <Grid xs={12}>
                           <Text h4 css={{lineHeight: '$xs'}}>
                              Entreprise
                           </Text>
                        </Grid>
                        <Grid xs={12}>
                           <Text css={{color: '$accents8'}}>
                              Built for the buisnesses, a custom inquery crafted by your requests.
                           </Text>
                        </Grid>
                     </Grid.Container>
                  </Card.Header>
                  <Card.Body css={{py: '$2'}}>
                     <Text css={{display: 'contents'}} h2>
                        N/A{' '}
                     </Text>
                     <Text css={{display: 'contents', color: '$accents8'}}>
                        /mo
                     </Text>
                     <Button css={{mt: '$7', mb: '$12'}}>Coming Soon</Button>

                     <Divider />
                     <Box as={'ul'}>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Custom Cores
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Custom Ram
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                             Custom Storage
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              Unlimited Bandwidth
                           </Text>
                        </Flex>
                        <Flex
                           as={'li'}
                           css={{py: '$2', gap: '$2'}}
                           align={'center'}
                        >
                           <CheckIcon />
                           <Text span css={{color: '$accents8'}}>
                              USA IP
                           </Text>
                        </Flex>
                     </Box>
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
