var body = $response.body;
if($response.body.indexOf('message') != -1){
var body = $response.body.replace(/\"exp\"\:\w+/g, "\"exp\"\:true").replace(/\"expired\"\:\d+/g, "\"expired\"\:1862914654000").replace(/\"msg\"\:\".*?\"/g, "\"msg\"\:\"下载加速会员将于 2030-01-01:00:00:00 过期！\"").replace(/\"code\"\:\d+/g, "\"code\"\:0").replace(/\"message\"\:\"\w+\"/g, "\"message\"\:\"ok\"");
$done({body});
}
$done();
