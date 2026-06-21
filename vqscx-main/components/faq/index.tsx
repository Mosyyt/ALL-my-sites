import {Button, Divider, Text} from '@nextui-org/react';
import React from 'react';
import {BoxIcon} from '../icons/BoxIcon';
import {Box} from '../styles/box';
import {Flex} from '../styles/flex';

export const Faq = () => {
   return (
      <>
         <Flex
            css={{
               py: '$20',
               gap: '$18',
               px: '$6',
            }}
            direction={'column'}
         >
            <Flex align={'center'} direction={'column'}>
               <Text span css={{color: '$blue600'}}>
                  FAQ
               </Text>
               <Text h2>You Have Questions?</Text>
               <Text
                  span
                  css={{
                     maxWidth: '700px',
                     color: '$accents8',
                     textAlign: 'center',
                  }}
               >
                  
               </Text>
            </Flex>

            <Flex
               css={{
                  'gap': '$10',
                  '@lg': {
                     px: '$64',
                  },
               }}
               direction={'column'}
            >
               <Flex css={{gap: '$5'}} justify={'center'}>
                  
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        When will I receive my product?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        Product receival can take up to a few hours depending on what you are ordering.
                        If you are ordering from one of our accounts or configs your order will be
                        completed instantly. Depnding on the amount of orders we have for any given product
                        it may take longer for products such as documents. If your order is over a few hours
                        please feel free to reach out to our support team and we will be happy to assist you.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                     Where can I get in contact/supoprt?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        If you need any assistance you can visit us at our discord, telegram, or email us directly at vqs@email.com.
                        The socials are listed above and also in our footer. We will typically respond within a 24 hour
                        range of time. Only message us about serious issues or problems with our payment processing. 
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        
                     </Text>
                  </Flex>
               </Flex>

               <Flex css={{gap: '$5'}} justify={'center'}>
                  
                  <Flex direction={'column'} css={{gap: '$3'}}>
                     <Text h3>
                        Why are we different?
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                        VQS provides only the best service. We value our customers ideas, thoughts, and criticism.
                        With our sleak and modernistic UI built on react, we try to give our users a premium felling
                        of buying accounts and other tools.
                     </Text>
                     <Text
                        span
                        css={{
                           color: '$accents8',
                        }}
                     >
                       
                     </Text>
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
