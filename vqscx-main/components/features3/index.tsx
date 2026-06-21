import {Card, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import { FeatureIcon } from '../icons/FeatureIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';
import { FaBolt, FaList, FaPassport, FaRuler, FaScroll, FaUser } from "react-icons/fa";
import { FaServer } from "react-icons/fa";


export const Features3 = () => {
   return (
      <>
         <Box
            css={{
               px: '$6',
               pb: '$14',
            }}
         >
            <Flex
               direction={'column'}
               justify={'center'}
               align={'center'}
               css={{
                  pt: '$20',
               }}
            >
               <Text span css={{color: '$blue600'}}>
                 VQS
               </Text>
               <Text h3>Services</Text>
               <Text
                  span
                  css={{
                     maxWidth: '800px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                 What we have to offer.
               </Text>
            </Flex>
            <Flex
               align={'center'}
               justify={'center'}
               wrap={'wrap'}
               css={{
                  gap: '1rem',
                  pt: '$14',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                        
                     <FaUser style={{fontSize: '30px'}}/>
                        <Flex direction={'column'}>
                           
                           <Text h5> Stealth Accounts</Text>
                           <Text span>
                              Freshly generated accounts with the highest level of anonyminity and configuration.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                 
                     <Flex css={{gap: '0.5rem'}}>
                     <FaServer style={{fontSize: '30px'}}/>
                        <Flex direction={'column'}>
                           <Text h5>VPS Service (coming soon)</Text>
                           <Text span>
                              We sell VPS servers with garantee DDOS protection and seucurity, no restricitons.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               
            </Flex>
            <Flex
               align={'center'}
               wrap={'wrap'}
               justify={'center'}
               css={{
                  gap: '1rem',
                  pt: '$8',
               }}
            >
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                     <Flex css={{gap: '0.5rem'}}>
                     <FaScroll style={{fontSize: '30px'}}/>
                        <Flex direction={'column'}>
                        
                           <Text h5>Private Configs</Text>
                           <Text span>
                              Our configs are 100% private and configured just for your needs. 
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                 
                     <Flex css={{gap: '0.5rem'}}>
                     <FaList style={{fontSize: '30px'}}/>
                        <Flex direction={'column'}>
                           <Text h5>Private Combos</Text>
                           <Text span>
                              Freshly generated private combos handmade and configured just for your needs.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                 
                     <Flex css={{gap: '0.5rem'}}>
                     <FaPassport style={{fontSize: '30px'}}/>
                        <Flex direction={'column'}>
                           <Text h5>Manipulate Documents</Text>
                           <Text span>
                              We can handcraft offical documents such as passports just for you.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
               <Card css={{mw: '500px'}}>
                  <Card.Body>
                 
                     <Flex css={{gap: '0.5rem'}}>
                     <FaBolt style={{fontSize: '30px'}}/>
                        <Flex direction={'column'}>
                           <Text h5>Fullz</Text>
                           <Text span>
                              'full information' emails, passwords, ssn and more.
                           </Text>
                        </Flex>
                     </Flex>
                  </Card.Body>
               </Card>
            </Flex>
         </Box>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
