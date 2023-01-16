CapsuleMinter.sol:

The CapsuleMinter Contract
The CapsuleMinter contract is an intermediary contract that holds tokens, assigns user holdings, and prevents abuse. This contract is responsible for the mintage of all Capsules. Nearly any token can be incorporated in the Capsule Protocol, with the exception of deflationary and rebasing tokens. Deflationary tokens are prohibited because the Capsule Protocol performs a check that the exact amount of token deposited is found at the contract post-transfer. Rebasing tokens are prohibited because their amount will change within the contract.
Capsule NFTs’ mint and burn functions are only callable through the CapsuleMinter. While this has no impact on the end functionality of the Capsule NFT (the methods work exactly as expected, simply through an intermediary), it prevents users from abusing contracts. You can think of the routing of NFT methods through the CapsuleMinter as a security blanket to ensure that no one can cheat the Capsule Protocol.
NOTE: It is important to consider that certain tokens, such as rebasing tokens (for example, ) will change their amount from within the protocol. As such, refrain from placing such tokens directly into Capsule NFTs unless you wrap the token first (for example, ).
NOTE: The Capsule Protocol supports deflationary tokens, but note that two 'deflation events' (placing into a Capsule NFT and redeeming from a Capsule NFT) occur when interacting with such.
​​
​​
User Interactable Methods
mintSimpleCapsule
function mintSimpleCapsule(address _capsule, string _uri, address _receiver) external payable
Usage: (External) Create a simple Capsule (normal compatible ERC-721 NFT) from collection _capsule with passed in _uri.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_uri: (string) - the NFT tokenURI
_receiver: (address) - the address which will receive the NFT (can be a contract)
Returns: (Nothing)
​
burnSimpleCapsule
function burnSimpleCapsule(address _capsule, uint256 _id) external
Usage: (External) Burn a simple Capsule from collection _capsule (normally, there is no incentive to do so).
Parameters:
_capsule: (address) - the address of the Capsule Collection
_id: (uint256) - the Simple Capsule NFT id
Returns: (Nothing)
​
mintSingleERC20Capsule
function mintSingleERC20Capsule(address _capsule, address _token, uint256 _amount, string _uri, address _receiver) external payable
Usage: (External) Create an ERC-721 Capsule from collection _capsule which holds an _amount of one token at address _token, with passed in _uri.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_token: (address) - the token address to be deposited alongside creation of the Capsule
_amount: (uint256) - the amount of token to be deposited alongside creation of the Capsule
_uri: (string) - the NFT URI (IPFS hashes commonly used)
Returns: (Nothing)
​
burnSingleERC20Capsule
function burnSingleERC20Capsule(address _capsule, uint256 _id) external
Usage: (External) Burn a Capsule from collection _capsule at _id. (This will return the amount of token at address token which is attached to that Capsule to the owner)
Parameters:
_capsule: (address) - the address of the Capsule Collection
_id: (uint256) - the Capsule token id to burn
Returns: (Nothing)
​
mintSingleERC721Capsule
function mintSingleERC721Capsule(address _capsule, address _token, uint256 _id, string _uri, address _receiver) external payable
Usage: (External) Create an ERC-721 Capsule from collection _capsule which holds one ERC-721 compatible token at address _token and _id, with passed in _uri.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_token: (address) - the token address to be deposited alongside creation of the Capsule
_id: (uint256) - the id of token to be deposited alongside creation of the Capsule
_uri: (string) - the NFT URI (IPFS hashes commonly used)
Returns: (Nothing)
​
burnSingleERC721Capsule
function burnSingleERC721Capsule(address _capsule, uint256 _id) external
Usage: (External) Burn a Capsule from collection _capsule at _id. This will return the ERC-721 token at address token which is attached to that Capsule to the sender.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_id: (uint256) - the Capsule token id to burn
Returns: (Nothing)
​
mintMultiERC20Capsule
function mintMultiERC20Capsule(address _capsule, address[] _tokens, uint256[] _amounts, string _uri, address _receiver) external payable
Usage: (External) Create an ERC-721 Capsule from collection _capsule which holds multiple _amounts of multiple tokens at address _tokens, with passed in _uri. _tokens is passed in as an array, of which each token is matched by an amount in the _amounts array.
For example - a call should be formatted like so:
_capsule: your Capsule Collection address
_tokens: [ <token-address-1>, <token-address-2]
_amounts: [ <token-amount-of-token-address-1>, <token-amount-of-token-address-2> ]
_uri: your URI
To which, two token transfers are required, and one Capsule is returned to the user.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_tokens: (address[]) - the token addresses to be deposited alongside creation of the Capsule
_amounts: (uint256[]) - the amounts of each token to be deposited alongside creation of the Capsule
_uri: (string) - the NFT URI (IPFS hashes commonly used)
Returns: (Nothing)
​
burnMultiERC20Capsule
function burnMultiERC20Capsule(address _capsule, uint256 _id) external
Usage: (External) Burn an ERC-721 Capsule from collection _capsule at _id. This will return the amounts of token at addresses tokens which is attached to that Capsule to the sender.
For example - a multi ERC20 Capsule which holds 1 WBTC and 1 WETH returns both tokens to the sender, and burns the Capsule.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_id: (uint256) - the Capsule token id to burn
Returns: (Nothing)
​
mintMultiERC721Capsule
function mintMultiERC721Capsule(address _capsule, address[] _tokens, uint256[] _ids, string _uri, address _receiver) external payable
Usage: (External) Create an ERC-721 Capsule from collection _capsule which holds multiple ERC-721 tokens at address _tokens (with corresponding _ids) with passed in _uri. _tokens is passed in as an array, of which each token is matched by an amount in the _ids array.
For example - a call should be formatted like so:
_capsule: (address) - the address of the Capsule Collection
_tokens: [ <token-address-1>, <token-address-2]
_ids: [ <token-id-of-token-address-1>, <token-id-of-token-address-2> ]
_uri: your URI
To which, two ERC-721 token transfers are required, and one Capsule is returned to the user.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_tokens: (address[]) - the token addresses to be deposited alongside creation of the Capsule
_ids: (uint256[]) - the ids of each ERC-721 token
_uri: (string) - the NFT URI (IPFS hashes commonly used)
Returns: (Nothing)
​
burnMultiERC721Capsule
function burnMultiERC721Capsule(address _capsule, uint256 _id) external
Usage: (External) Burn an ERC-721 Capsule from collection _capsule at _id. This will return the token at addresses tokens which is attached to that Capsule to the sender.
For example - a multi ERC721 Capsule which holds 1 Rare Pepe and 1 Polkamon returns both tokens to the sender, and burns the Capsule.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_id: (uint256) - the Capsule token id to burn
Returns: (Nothing)
​
getMultiERC20CapsuleData
function getMultiERC20CapsuleData(address _capsule, uint256 _id) external view returns (struct CapsuleMinterStorage.MultiERC20Capsule _data)
Usage: (External) Get a struct holding:
array of addresses
array of amounts of a multi-ERC20 Capsule from collection _capsule, at _id.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_id: (uint256) - the NFT id
Returns: (Struct: {address[], uint256[]}) - the token ids
​
getMultiERC721CapsuleData
function getMultiERC721CapsuleData(address _capsule, uint256 _id) external view returns (struct CapsuleMinterStorage.MultiERC721Capsule _data)
Usage: (External) Get a struct holding:
array of addresses
array of ids of a multi-ERC721 Capsule from collection _capsule, at _id.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_id: (uint256) - the NFT id
Returns: (Struct: {address[], uint256[]}) - the token ids
​
getCapsuleOwner
function getCapsuleOwner(address _capsule, uint256 _id) external view returns (address)
Usage: (External) Get the owner of a certain Capsule from collection _capsule at _id.
Parameters:
_capsule: (address) - the address of the Capsule Collection
_id: (uint256) - the Capsule id
Returns: (address) - the owner of the Capsule
​
Lesser Interesting Methods
addToWhitelist
function addToWhitelist(address _user) external
​
removeFromWhitelist
function removeFromWhitelist(address _user) external
​
getMintWhitelist
function getMintWhitelist() external view returns (address[])
​
isMintWhitelisted
function isMintWhitelisted(address _user) external view returns (bool)
​
flushTaxAmount
function flushTaxAmount() external
​
updateCapsuleMintTax
function updateCapsuleMintTax(uint256 _newTax) external
​
initialize
function initialize(address _factory) external
​
onERC721Received
function onERC721Received(address, address, uint256, bytes) external pure returns (bytes4)
​
_depositToken
function _depositToken(contract IERC20 _token, address _depositor, uint256 _amount) internal returns (uint256 _actualAmount)
​
Key Events
CapsuleMintTaxUpdated
event CapsuleMintTaxUpdated(uint256 oldMintTax, uint256 newMintTax)
​
SimpleCapsuleMinted
event SimpleCapsuleMinted(address account, address capsule, string uri)
​
SimpleCapsuleBurnt
event SimpleCapsuleBurnt(address account, address capsule, string uri)
​
SingleERC20CapsuleMinted
event SingleERC20CapsuleMinted(address account, address capsule, address token, uint256 amount, string uri)
​
SingleERC20CapsuleBurnt
event SingleERC20CapsuleBurnt(address account, address capsule, address token, uint256 amount, string uri)
​
SingleERC721CapsuleMinted
event SingleERC721CapsuleMinted(address account, address capsule, address token, uint256 id, string uri)
​
SingleERC721CapsuleBurnt
event SingleERC721CapsuleBurnt(address account, address capsule, address token, uint256 id, string uri)
​
MultiERC20CapsuleMinted
event MultiERC20CapsuleMinted(address account, address capsule, address[] tokens, uint256[] amounts, string uri)
​
MultiERC20CapsuleBurnt
event MultiERC20CapsuleBurnt(address account, address capsule, address[] tokens, uint256[] amounts, string uri)
​
MultiERC721CapsuleMinted
event MultiERC721CapsuleMinted(address account, address capsule, address[] tokens, uint256[] ids, string uri)
​
MultiERC721CapsuleBurnt
event MultiERC721CapsuleBurnt(address account, address capsule, address[] tokens, uint256[] ids, string uri)
​
Modifiers
checkStatus
modifier checkStatus()
​
onlyValidCapsuleCollections
modifier onlyValidCapsuleCollections(address _capsule)
​
onlyCollectionMinter
modifier onlyCollectionMinter(address _capsule)
​
CapsuleMinterStorage
SingleERC20Capsule
struct SingleERC20Capsule {
  address tokenAddress;
  uint256 tokenAmount;
}
​
MultiERC20Capsule
struct MultiERC20Capsule {
  address[] tokenAddresses;
  uint256[] tokenAmounts;
}
​
SingleERC721Capsule
struct SingleERC721Capsule {
  address tokenAddress;
  uint256 id;
}
​
MultiERC721Capsule
struct MultiERC721Capsule {
  address[] tokenAddresses;
  uint256[] ids;
}
​
factory
contract ICapsuleFactory factory
​
capsuleMintTax
uint256 capsuleMintTax
​
isSimpleCapsule
mapping(address => mapping(uint256 => bool)) isSimpleCapsule
​
singleERC20Capsule
mapping(address => mapping(uint256 => struct CapsuleMinterStorage.SingleERC20Capsule)) singleERC20Capsule
​
singleERC721Capsule
mapping(address => mapping(uint256 => struct CapsuleMinterStorage.SingleERC721Capsule)) singleERC721Capsule
​
multiERC20Capsule
mapping(address => mapping(uint256 => struct CapsuleMinterStorage.MultiERC20Capsule)) multiERC20Capsule
​
multiERC721Capsule
mapping(address => mapping(uint256 => struct CapsuleMinterStorage.MultiERC721Capsule)) multiERC721Capsule
​
mintWhitelist
struct EnumerableSet.AddressSet mintWhitelist

End of CapsuleMinter.sol contract documentation.