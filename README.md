# Crayon Cats
## About

Built as part of Moralis Academy's, "Build an NFT Marketplace" course.

Try it live on the Goerli testnet https://cryptonube.github.io/crayon-cats.

Press Start and connect your Metamask wallet through the Goerli Testnet. 

Head over to the Catalogue and check out the cats. 

Check out what is for sale in the "Marketplace". If you purchase a cat, it will show up in the "My Kitties" section. If you purchase 2 or more, you can breed them to "mint" yourself another cat.
The "Breed" section is accessible in the "My Kitties" section or from the homepage under the "Breed Kitties" feature.

Sell your cats in the marketplace by clicking on one of your cats in the "My Kitties Section". You will be taken to a "Cat Details" page, where you can set a price and confirm your offer. Your offer will show up in the "Marketplace". You can cancel your offer anytime. 

To view the details of any cat in the Catalogue, Marketplace or My Kitties, click on the cat.

To check out how original (0 Generation) cats are made, go to the "Cat-Factory" There, you can play with the sliders and set various parameters. However, only the contract owner can "mint" 0 Generation cats.

<img src="client\assets\images\Crayon-Cats-Homepage.png"/>
<img src="client\assets\images\Crayon-Cats-1.png"/>
<img src="client\assets\images\Breed.png"/>

# Try out code

## Install dependancies

~~~
npm i
~~~

## Install Truffle.

~~~
npm install  -g truffle
~~~

## Start your local Ganache.

## Deploy your contract to your local ganache node.

~~~
truffle migrate
~~~
or
~~~
truffle migrate --reset
~~~

Replace the 'contractAddress' and the 'contractOwner' addresses, in the index.js file, with the new addresses from the migrate.

Import the contractOwner address, into your metamask, by the private key provided by your local Ganache.

## Run in your local server
~~~
cd client
~~~
~~~
python -m http.server 8000
~~~
