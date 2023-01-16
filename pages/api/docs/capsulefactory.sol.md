CapsuleFactory.sol:

The CapsuleFactory Contract
The CapsuleFactory contract allows users to deploy their own Capsule Collections. While the CapsuleMinter contract can be thought of as a database for Capsule NFTs, the CapsuleFactory contract can be thought of as a database for Capsule Collections.
​​
​​
User Interactable Methods
createCapsuleCollection
function createCapsuleCollection(string _name, string _symbol, address _tokenURIOwner, bool _isCollectionPrivate) external payable returns (address)
Usage: The main method which creates a Capsule NFT Collection for a user. Creation of a Capsule Collection MUST go through the CapsuleFactory in order to ensure ecosystem safety - this ensures that no Capsule contract is able to exploit the CapsuleMinter's token storing/redeeming methods.
Parameters:
_name: (string) - the name of the Capsule Collection
_symbol: (string) - the symbol of the Capsule Collection
_tokenURIOwner: (address) - the address of the Capsule Collection tokenURIOwner (also known as the Metamaster)
_isCollectionPrivate: (boolean) - whether the Capsule Collection is designated as private
Returns: (address) - The address of the newly deployed Capsule Collection.
getAllCapsuleCollections
function getAllCapsuleCollections() external view returns (address[])
Usage: Get a list of all Capsule Collections created.
Parameters: (none)
Returns: (address[]) - An array of addresses of all Capsule Collections created.
getCapsuleCollectionsOf
function getCapsuleCollectionsOf(address _owner) external view returns (address[])
Usage: Get list of all Capsule Collections created by an input owner address _owner.
Parameters:
_owner: (address) - the address of the owner
Returns: (address[]) - An array of addresses of all Capsule Collections created by _owner.
User Non-Interactable Methods
updateCapsuleCollectionOwner
function updateCapsuleCollectionOwner(address _previousOwner, address _newOwner) external
Usage: A helper method which updates owner of a Capsule Collection. This is called when the transferOwnership method is called by the Capsule NFT in order to update the Capsule's owner information in the CapsuleFactory. Only a Capsule NFT may call this method.
Parameters:
_previousOwner: (address) - the address of the old owner (the caller)
_newOwner: (address) - the address of the new owner
Lesser Interesting Methods
initialize
function initialize() external
addToWhitelist
function addToWhitelist(address _user) external
removeFromWhitelist
function removeFromWhitelist(address _user) external
addToBlacklist
function addToBlacklist(address _user) external
removeFromBlacklist
function removeFromBlacklist(address _user) external
flushTaxAmount
function flushTaxAmount() external
The owner or tax collector can call this function to withdraw all ETH stored in this contract
getWhitelist
function getWhitelist() external view returns (address[])
Get a list of all whitelisted addresses
getBlacklist
function getBlacklist() external view returns (address[])
Get a list of all blacklisted addresses
isBlacklisted
function isBlacklisted(address _user) external view returns (bool)
Return whether a given address is blacklisted or not
isWhitelisted
function isWhitelisted(address _user) external view returns (bool)
Return whether a given address is whitelisted or not
setCapsuleMinter
function setCapsuleMinter(address _newCapsuleMinter) external
Set CapsuleMinter address
updateCapsuleCollectionTax
function updateCapsuleCollectionTax(uint256 _newTax) external
Update Capsule Collection creation tax
updateTaxCollector
function updateTaxCollector(address _newTaxCollector) external
Update tax collector
Key Constants
VERSION
string VERSION
Key Events
CapsuleCollectionTaxUpdated
event CapsuleCollectionTaxUpdated(uint256 oldTax, uint256 newTax)
CapsuleCollectionCreated
event CapsuleCollectionCreated(address caller, address capsule)
CapsuleOwnerUpdated
event CapsuleOwnerUpdated(address capsule, address previousOwner, address newOwner)
TaxCollectorUpdated
event TaxCollectorUpdated(address oldTaxCollector, address newTaxCollector)
CapsuleFactoryStorage
capsuleCollectionTax
uint256 capsuleCollectionTax
taxCollector
address taxCollector
capsuleMinter
address capsuleMinter
capsules
address[] capsules
capsulesOf
mapping(address => struct EnumerableSet.AddressSet) capsulesOf
isCapsule
mapping(address => bool) isCapsule
whitelist
struct EnumerableSet.AddressSet whitelist
blacklist
struct EnumerableSet.AddressSet blacklist

End of CapsuleFactory.sol documentation.