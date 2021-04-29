# collaborative_ringle_server
collaborative editor server


현재까지 추가사항

-> Card model
Scheme
content : String
created : String
updater : String
cardposition : Number

/create
/update
/find/all
/find
/delete

-> Loc model
Scheme
refs: Array
page: Number

/create
/update
/find/all

-> Tree model
Scheme
cards: Array
page: Number

/create
/update
/find/all
