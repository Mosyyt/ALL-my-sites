import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import { FaBolt, FaCarCrash, FaDiscord, FaMoneyBill, FaTelegram } from 'react-icons/fa';
import {BoxIcon} from '../icons/BoxIcon';
import {FeatureIcon} from '../icons/FeatureIcon';
import {Flex} from '../styles/flex';

export const Features2 = () => {
   return (
      <>
         <Flex
            direction={'column'}
            css={{
               'gap': '1rem',
               'pt': '$20',
               'justifyContent': 'center',
               'alignItems': 'center',
               'px': '$6',

               '@sm': {
                  gap: '5rem',
                  flexDirection: 'row-reverse',
                  px: '$16',
               },
               '@md': {
                  justifyContent: 'space-evenly',
               },
            }}
         >
            <Flex direction="column" align={'center'}>
               <Text span css={{color: '$blue600'}}>
                  VQS
               </Text>
               <Text h3>Socials</Text>
               <Text
                  span
                  css={{
                     maxWidth: '400px',
                     color: '$accents8',
                  }}
               >
                 
               </Text>

               <Flex
                  justify={'center'}
                  wrap={'wrap'}
                  css={{
                     py: '$10',
                  }}
               >
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <FaDiscord style={{fontSize: '30px'}}/>
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Discord
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Our offical discord link with additional 24/7 support and added services.
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <FaTelegram style={{fontSize: '30px'}}/>
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Telegram
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Our offical Telegram link with additional 24/7 support and added services.
                        </Text>
                     </Flex>
                  </Flex>
                  <Flex
                     css={{
                        py: '$10',
                        gap: '$5',
                     }}
                  >
                     <FaBolt style={{fontSize: '30px'}}/>
                     <Flex direction={'column'}>
                        <Text h4 weight={'medium'}>
                           Cracked.io
                        </Text>
                        <Text
                           span
                           css={{
                              maxWidth: '325px',
                              color: '$accents8',
                           }}
                        >
                           Our offical Cracked.io page where our posts and addiontal campaign is. 
                        </Text>
                     </Flex>
                  </Flex>
               </Flex>
            </Flex>
           
         </Flex>

         <Divider
            css={{position: 'absolute', inset: '0p', left: '0', mt: '$5'}}
         />
      </>
   );
};
