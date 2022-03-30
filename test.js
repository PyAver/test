if ($request.headers['Cookie']) {
  const cookie = $request.headers['Cookie'];
  const url = $request.url;
  const walkr_auth_token = url.split('auth_token=')[1].split('&')[0];

  const saveCookie = $persistentStore.write(cookie, "WalkrCookie");
  const saveToken = $persistentStore.write(walkr_auth_token, "WalkrToken");

  if (!(saveCookie && saveToken)) {
        $notification.post("Walkr Cookie 保存錯誤‼️", "", "請重新登入")
    } else {
        $notification.post("Walkr Cookie 保存成功🎉", "", "")
        $notification.post(saveToken, "", "")
    }
} else {
    $notification.post("Walkr Cookie 保存失敗‼️", "", "請重新登入")
}
$done({})
