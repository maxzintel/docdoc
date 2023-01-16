Capsule.sol:

The Capsule NFT Contract
The Capsule NFT contract ("Capsule contract") is the base ERC-721 NFT utilized by the Capsule Protocol. The other contracts (CapsuleFactory.sol and CapsuleMinter.sol) mint, burn, and interact with this contract. Any NFT generated from the Capsule Protocol is of this type.
A new instance of this contract is deployed each time a Capsule Collection is created. 
​​
User Interactable Methods
lockCollectionCount
function lockCollectionCount(uint256 _nftCount) external virtual
Usage: Lock the collection at a provided NFT count (the collection total Capsule NFT count), preventing any further minting past the given number. The set maxId of this collection will be the provided NFT count minus one, for clarity (without subtracting 1, a lock count of 15 would provide for 16 NFTs, as it includes the 0 count).
Parameters:
_name: (uint256) - the count at which to lock the Capsule Collection from further minting
​
isCollectionLocked
function isCollectionLocked() public view returns (bool)
Usage: Check if the Capsule Collection is locked. This is checked by ensuring the maxId is less than the counter.
Parameters: (none)
​
transferOwnership
function transferOwnership(address _newOwner) public virtual
Usage: Transfer ownership of the Capsule to _newOwner. The new owner of the Capsule NFT will be able to call any owner-only methods from the contract.
Parameters:
_account: (address) - The address (account) to pass ownership onto. This can also be the zero address.
​
tokenURI
function tokenURI(uint256 tokenId) public view returns (string)
Usage: Check the tokenURI of a Capsule at id tokenId. The tokenURI will map to the NFT metadata.
Parameters:
_tokenId: (uint256) - the id of the NFT
​
setTokenURI
function setTokenURI(uint256 _tokenId, string _newTokenURI) external
Usage: Set new token URI for a given tokenId. Only the tokenURI owner, also known as the Metamaster, can set a new URI.
Parameters:
_tokenId: (uint256) - the id of the NFT to burn
_newTokenURI: (string) - the new NFT at _tokenId's tokenURI
​
updateTokenURIOwner
function updateTokenURIOwner(address _newTokenURIOwner) external
Usage: Update the tokenURIowner. Only the tokenURIOwner, also known as the Metamaster, can call this function.
Parameters:
_account: (address) - The new address to become the tokenURIOwner (Metamaster)
​
isCollectionMinter
function isCollectionMinter(address _account) external view returns (bool)
Usage: Check if the passed in address of _account is allowed to mint from the collection.
Parameters:
_account: (address) - The address (account) to check
​
exists
function exists(uint256 tokenId) external view returns (bool)
Usage: Check if a Capsule (at id tokenId) of the current collection exists.
Parameters:
_tokenId: (uint256) - the id of the NFT
​
User Non-Interactable Methods
constructor
constructor(string _name, string _symbol, address _tokenURIOwner, bool _isCollectionPrivate) public
Usage: Called upon creation of Capsule. The CapsuleFactory calls the constructor upon creation of a Capsule Collection.
Parameters:
_name: (string) - the name of the Capsule Collection
_symbol: (string) - the symbol of the Capsule Collection
_tokenURIOwner: (address) - the address of the Capsule Collection tokenURIOwner (also known as the Metamaster)
_isCollectionPrivate: (boolean) - whether the Capsule Collection is designated as private
​
mint
function mint(address _account, string _uri) external
Usage: Create an NFT from this collection. This method is uneditable by users, as only the CapsuleMinter may mint NFTs from this collection. Users interact with this mint through the CapsuleMinter's mintCapsule methods.
Parameters:
_account: (address) - the account to receive the NFT
_uri: (string) - the set NFT tokenURI
​
burn
function burn(address _account, uint256 _tokenId) external
Usage: Burn an NFT from this collection. This method is uneditable by users, as only the CapsuleMinter may burn NFTs from this collection. Users interact with this burn through the CapsuleMinter's burnCapsule methods.
Parameters:
_account: (address) - the account that is burning the NFT
_tokenId: (uint256) - the id of the NFT to burn
​
Key Constants
VERSION
string VERSION
Usage: The current version.
​
counter
uint256 counter
Usage: The current Capsule Collection counter (used as an id).
​
maxId
uint256 maxId
Usage: The maximum id the collection is allowed to mint up to (this may also be set to the MaxUInt256 to signify no maximum). The maxId may be set to a number lower than the current counter or id, in which case no further Capsules may be minted from this collection.
​
factory
contract ICapsuleFactory factory
Usage: The address of the CapsuleFactory this Capsule is attached to.
​
tokenURIOwner
address tokenURIOwner
Usage: The current tokenURIOwner of the collection - this parameter may also be known as the 'Metamaster'.
​
isCollectionPrivate
bool isCollectionPrivate
Usage: A boolean which designates whether the collection is private (true) or public (false).
​
Lesser Interesting Functions
supportsInterface
function supportsInterface(bytes4 interfaceId) public view returns (bool)
​
_beforeTokenTransfer
function _beforeTokenTransfer(address from, address to, uint256 tokenId) internal
​
_burn
function _burn(uint256 tokenId) internal
​
Modifiers
onlyMinter
modifier onlyMinter()
​
Key Events
TokenURIOwnerUpdated
event TokenURIOwnerUpdated(address oldOwner, address newOwner)
​
TokenURIUpdated
event TokenURIUpdated(uint256 tokenId, string oldTokenURI, string newTokenURI)

End of Capsule.sol contract documentation.