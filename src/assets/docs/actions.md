ACTIONS
=======

While there are an infinite ways a user could interact with the Budget Object Model (BOM), there are a finite of actions that cause *persistance*. These persisting actions are the ones we define in the API. And these are the actions we store to maintain a history of what happend, when, any by whom in the BOM.

Here is a working v.0.0 list of actions users can take that cause persistence on othe BOM.

Cards
-----
createCard
updateCard
deleteCard
copyCard
commentCard
addAttachmentToCard
deleteAttachementFromCard
convertFromCardToList
moveCardToBudget
moveCardFromBudget
createTimeline
removeTimelineFromCard
updateTimeline
addMemberToCard
removeMemberFromCard


Lists
-----
createList
updateList
deleteList
copyList
addCardToList
deleteCardFromList
moveListFromBudget
moveListToBudget


Budgets
-------
createBudget
updateBudget
deleteBudget
copyBudget
makeBudgetTemplate
addMemberToBudget
removeMemberFromBudget
updateMember
makeAdminOfBudget
makeObserverofBudget
makeNormalMemberofBoard
addOrganziationToBudget
removeOrganizationFromBudget



Organization
-----------
createOrganization
updateOrganziation
makeNormalMemberOfOrganization
makeAdminOfOrganization
addMemberToOrganization
updateMember (see also Budgets)




