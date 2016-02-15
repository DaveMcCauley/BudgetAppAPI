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




this is some scratch...
<div class="ac-sub post">
        <input class="ac-input" id="ac-members.post" name="ac-members.post" type="checkbox" />
        <label class="ac-label" for="ac-members.post"><span class="opcode">POST</span>members/</label>
        <article class="ac-sub-text">
          <h1>Arguments</h1>
          <div class="param-row">
            <div class="param name head">Name</div>
            <div class="param reqd head">Req'd?</div>
            <div class="param desc head">Description</div>
            <div class="param data head">Valid Values</div>
            <div class="param default head">Default Value</div>
          </div>
          <div class= "param-row">
            <div class= "param name">username</div>
            <div class= "param reqd">required</div>
            <div class= "param desc">a unique user name</div>
            <div class= "param-data">string with length from 1 to 32</div>
            <div class= "param default">[none]</div>
          </div>
          <div class="param-row">
            <div class="param name">email</div>
            <div class="param reqd">required</div>
            <div class="param desc">a valid email is required for member creation</div>
            <div class="param data">valid email</div>
            <div class="param default">[none]</div>
          </div>
          <div class="param-row">
            <div class="param name">fullName</div>
            <div class="param reqd">optional</div>
            <div class="param desc">every user needs a name!</div>
            <div class="param data">string with length from 1 to 16384</div>
            <div class= "param default">[none]</div>
          </div>
          <div class="param-row">
            <div class="param name">bio</div>
            <div class="param reqd">optional</div>
            <div class="param desc">sets project status</div>
            <div class="param data">string with length from 1 to 16384</div>
            <div class="param default">[none]</div>
          </div>
          <div class="param-row">
            <div class="param name">avatar</div>
            <div class="param reqd">optional</div>
            <div class="param desc">the users' avatar image</div>
            <div class="param data">a file</div>
            <div class="param default">[none]</div>
          </div>
          <div class="param-row">
            <div class="param name">url</div>
            <div class="param reqd">optional</div>
            <div class="param desc">the user's personal url</div>
            <div class="param data">string with length from 1 to 16384</div>
            <div class="param default">[none]</div>
          </div>
          <div class="param-row">
            <div class="param name">memberType</div>
            <div class="param reqd">optional</div>
            <div class="param desc">sets starred toggle for user</div>
            <div class="param data"><u>One of:</u><ul><li>org</li><li>private</li><li>public</li></ul></div>
            <div class="param default">[none]</div>
          </div>
          <div class="param-row">
            <div class="param name">prefs/comments</div>
            <div class="param reqd">optional</div>
            <div class="param desc">sets comments permission</div>
            <div class="param data"><u>One of:</u><ul><li>disabled</li><li>members</li><li>org</li><li>public</li></ul></div>
            <div class="param default">[none]</div>
          </div>
          <h1>Responses</h1>
          <div class="response-row">
            <div class= "response status"><div class= "pill ok">STATUS 202</div></div>
            <div class= "response note">The requested field was updated.</div>
          </div>
          <div class="response-row">
            <div class= "response status"><div class= "pill err">STATUS 400</div></div>
            <div class= "response note">
              Returned if the user is authenticated, but lacks the permission to view the
              requested fields.
            </div>
          </div>
          <div class="response-row">
            <div class= "response status"><div class= "pill err">STATUS 401</div></div>
            <div class= "response note">
              Returned if some of the parameters failed to update because one or
              more arguments contained invalid data that could not pass validation.
              The caller can check the returned json/application to which argument(s)
              failed.
              <div class="json example">
                <div>"failedArgs": [
                  <div>{
                    <div>"desc": "invalid data type",</div>
                    <div>"closed": "invalid data type"</div>
                  }</div>
                ]</div>
              </div>
            </div>
          </div>
          <div class="response-row">
            <div class= "response status"><div class= "pill err">STATUS 404</div></div>
            <div class= "response note">
              Returned if the user is not authenticated, or the supplied {id} does
              not exist.
            </div>
          </div>
        </article>
      </div> <!-- PUT budget/{id} -->

