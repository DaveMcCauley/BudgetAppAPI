Budget data model...
{
	"name":	"Project Budget",
	"desc": "This is a description of the budget",
	"closed": false,
	"idOrganization": "537cf656278583fffa17cfff",
	"invitations": null,
	"shortLink": "3dRgj0NX",
	"dateLastActivity": "2014-12-03T04:07:14.788Z",
	"dateLastView"2014-12-03T04:07:47.869Z",
	"id": "537cf656278583fffa17cfff",
	"invited": false,
	"starred": false,
	"url": "https://bugetapp.com/b/3dRgjONX/Project-Budget",
	"shortURL": https://budgetapp.com/b/3dRgj0NX"
	"prefs": {
		"permissionLevel": "private",
		"requests": "disabled",
		"invitations": "members",
		"avatar": "#0070BF",
		"canInvite": true,
		"comments": "members"
	},
	"memberships": [
		{
			"id": "537cf656278583fffa17cfff",
			"idMember": "51118e3c7ef0484a56011b4a",
			"memberType": "admin",
			"unconfirmed": false,
			"deactivated": false
		}
	],
	"versions": [
		{
			"id": "537cf656278583fffa17cfff",
			"name": "Preliminary",
			"desc": "A version before the more permanant one",
			"dateCreate": "2014-12-03T04:07:14.788Z",
			"dateLastActivity": "2014-12-03T04:07:14.788Z",
			"deactivated": true,
			"pos": 0
		},
		{
			"id": "537cf656278583fffa17cfff",
			"name": "Project Start",
			"desc": "A version with high-hopes",
			"dateCreate": "2014-12-03T04:07:14.788Z",
			"dateLastActivity": "2014-12-03T04:07:14.788Z",
			"deactivated": false,
			"pos": 1
		}
	]
}


Budget Item Model...
{
	"name": "Budget item number one",
	"desc": "This is a description of budget item number one",
	"closed": false,
	"dateLastActivity": "2014-12-03T04:07:14.788Z",
	"dataAmount": 28000.000,
	"idBudget": "537cf656278583fffa17cfff",
	"idParent": "537cf656278583fffa17cfff",
	"idHead": "537cf656278583fffa17cfff",
	"idVersion": "537cf656278583fffa17cfff",
	"idLabels": [
		{
			"id": "537cf656278583fffa17cfff",
		}
	]
	"idSplits": [
		{
			"id": "537cf656278583fffa17cfff",
			"desc":"Split",
			"percentage": 0.20
		}
	],
	"memberships": [ <--{members get upates, etc} 
		{
			"id": "537cf656278583fffa17cfff",
			"idMember": "537cf656278583fffa17cfff",
			"memberType": "notify",
			"deactivated": false
		}
	],
	"pos": 10,   <--{position under parent?}
	"shortLink": "3dRgj0NX",
	"url": "https://bugetapp.com/i/3dRgjONX/Budget-item-number-one",
	"shortURL": https://budgetapp.com/i/3dRgj0NX"
}

Label data model
{
	"color": "#fffff",
	"idBoard": "537cf656278583fffa17cfff",
	"name": "Name of hte label"
}


Member data model...

{
	"avatarSource":	"http://asdfasdf",
	"bio": "This is the biographical data supplied by the user.",
	"confirmed": true,
	"email": "bob@tester.com",
	"fullName": "Bob T. Tester",
	"idBudgets": [
		{
			"id": "537cf656278583fffa17cfff"
		}
	],
	"idBudgetsPinned": [
			{"id": "537cf656278583fffa17cfff"}
	],
	"idOrganizations": [
		{"id": "43453ffaddc45cdda"
		}
	],
	"memberType": "admin",
	"oneTimeMessagesDismissed": [
		{
			"name": "MSG001"
		},
		{
			"name": "MSG002"
		}
	]
	"products":[
		{
				"name": "budgetApp"
		},
		{	
				"name": "chat"
		}
	],
	"url": "https://budgetapp.com/bob-t-tester",
	"username": "bobttester"
}


Web tokens...
{
	"dateCreated": "2014-12-03T04:07:14.788Z",
	"dateExpires": "2014-14-03T04:07:14.788Z",
	"idMember": "537cf656278583fffa17cfff",
	"identifier": ""537cf656278583fffa17cfff",
	"permissions": [	]
}


Organizations...
{
	"id": "4ee7e59ae581acdec8000891",
	"billableMemberCount": 4,
	"desc": "This is a test organization. It's used for testing and little more.",
	"displayName": "Test Organization",
	"idBudgets": [
		{
			"id": "537cf656278dd5fac56e"
		}
	]
	"invitations" : [
	]
	"memberships": [
		{
			"id": "4227e59ae582acdec800295",
			"idMember": "4ee7e2e1e582acdec80012",
			"memberType":"admin",
			"unconfirmed": false
		},  {
			"id": "514c6001b56914000002a",
			"idMember": "524c655f154441a42",
			"idMemberType": "normal",
			"unfonfirmed": false}
	}],
	"name": "pubicOrg",
	"prefs": {
		"permissionLevel": "public",
		"orgInviteRestrict": [],
		"externalMembersDisabled": false,
		"associatedDomain": null,
		"budgetVisibilityRestrict": {
			"private": "org",
			"org": "org",
			"public": "org"
		}
	"premiumFeatures": [],
	"products": [],
	"url": "https://budgetapp.com/publicorg",
	"website": "http://testorg.com"
	},

	
ID type... 
{
	"type": "organziation",
	"id": "4efe2c2fee1c002c9"

}



