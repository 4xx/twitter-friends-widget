Plugin supports many arguments. All arguments are optional except for your <b>Twitter<br>
username</b>!<br />
<br />
<table cellpadding='2' border='1' cellspacing='0'>
<blockquote><tr>
<blockquote><th>Option</th>
<th>Description</th>
<th>Default value</th>
</blockquote></tr>
<tr>
<blockquote><td>debug</td>
<td>Set debug to <b>1</b> while you test to display errors, then remove<br>
it when you done.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>username</td>
<td>your Twitter username!</td>
<td><b>''</b></td>
</blockquote></tr>
<tr>
<td> friends </td>
<td>
by default set to <b>0</b> to load followers. set it to <b>1</b> to load friends (whom you follow)<br>
</td>
<td><b>0</b></td>
</tr>
<tr>
<blockquote><td>
<p align='center'><b>Friends Pictures</b></p>
</td>
</blockquote></tr>
<tr>
<blockquote><td>users</td>
<td>Number of visible friends' pictures on each swap. Note that Twitter<br>
will return your latest 100 Followers/Friends. you can choose to show a<br>
smaller number of pictures at a time. it's recommend to show a number that<br>
fits to your widget space and 100 is dividable by it.</td>
<td><b>20</b></td>
</blockquote></tr>
<blockquote><tr>
</blockquote><blockquote><td>users_max</td>
<td>Twitter will return your latest 100 Followers/Friends or less. you can choose to show a<br>
smaller number of pictures at all (ex: 80).<br>
<br /> If you set this the same as 'users' then no swapping happens.<br>
</td>
<td><b>100</b></td>
</blockquote></tr>
<tr>
<blockquote><td>loop</td>
<td>loop friends pictures animation or not. set it to <b>1</b> to loop or<br>
<b>0</b> to disable.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_link</td>
<td>by default, friends pictures will link to their Twitter page. your can<br>
link it to their homepage by setting this to <b>1.</b></td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_image</td>
<td>Pictures are 48x48 pixels. you can scale it down to 32 pixels for example.</td>
<td><b>48</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_animate</td>
<td>Customize picture entry animation type. available values are <b>'width'</b>,<br>
<b>'height'</b>, <b>'opacity'</b></td>
<td><b>'opacity'</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_change</td>
<td>Entry transition time of a picture in milliseconds.</td>
<td><b>200</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_swap</td>
<td>Time in milliseconds to wait before displaying the next (users) set.<br>
This delay is used only when tweets are disabled. otherwise swapping happens<br>
after displaying current visible friends tweets. </td>
<td><b>5000</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_append</td>
<td>By default friends picture is added by the end of pictures list. to<br>
insert picture at the beginning of list set this to <b>0</b></td>
<td><b>1</b></td>
</blockquote></tr>
<tr>
<blockquote><td>
<p align='center'><b>Profile Header</b></p>
</td>
</blockquote></tr>
<tr>
<blockquote><td>header</td>
<td>Show your Twitter profile information like your picture, profile link,<br>
friends/followers count. <br />
may contain any HTML code or these optional variables which will be replaced<br>
with actual values.<br />
<b><code>_tp_</code></b> : Twitter profile Link.<br />
<b><code>_ti_</code></b> : Twitter picture.<br />
<b><code>_fo_</code></b> : followers count.<br />
<b><code>_fr_</code></b> : friends count.<br />
<br />
Ex:<b> <code>'&lt;a href=\'_tp_\'&gt;&lt;/a&gt;&lt;img src=\'_ti_\'/&gt;&lt;/a&gt;&lt;h2&gt;&lt;/h2&gt;_fo_ Awesome Follwers!&lt;/h2&gt;'</code>
<br />
</b>Notice how single quotes in HTML was replaced with <b>\'<br />
</b>If you don't leave this option empty, widget will make an extra call<br>
to the twitter API to load your profile information.</td>
<td><b>''</b></td>
</blockquote></tr>
<tr>
<blockquote><td>
<p align='center'><b>Friends' Tweets</b></p>
</td>
</blockquote></tr>
<tr>
<blockquote><td>tweet</td>
<td>Set this to <b>1 </b>to display friends' tweets at widget footer. Tweets<br>
will also appear as a tool tip when hovering on a friend picture.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_avatar</td>
<td>you can disable friend picture not to appear on his/her tweet by setting<br>
this to <b>0</b></td>
<td><b>1</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_author</td>
<td>Show tweet author name or not. you might set it to <b>1</b> to show<br>
the author name.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_date</td>
<td>Show tweet date or not. set it to <b>0</b> to hide.</td>
<td><b>1</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_source</td>
<td>Show tweet source or not (ex: web, twhirl). set it to <b>0</b> to hide.</td>
<td><b>1</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_image</td>
<td>by default tweet avatar image is 48x48. You may scale it down by setting<br>
it to something like <b>32</b></td>
<td><b>48</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_stay</td>
<td>Time in milliseconds for a tweet to be shown.</td>
<td><b>5000</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_change</td>
<td>Entry/exit transition time of a tweet in milliseconds. </td>
<td><b>200</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_animate</td>
<td>What to animate for tweet transition. by default is set to 'opacity'<br>
to fade tweets in. <br />
possible values are <b>'opacity'</b>, <b>'height'</b>, <b>'width'</b>,<br>
<b>'fontSize', 'lineHeight'</b>. (case-sensitive)</td>
<td><b>'opacity'</b></td>
</blockquote></tr>
<tr>
<blockquote><td>info</td>
<td>This option is an HTML link to my homepage. <b>You can remove it</b>
by setting this option to empty string (''), but I'll appreciate it if you<br>
attribute/link-back to me elsewhere on your website.</td>
<td><b>Plugin Link!</b></td>
</blockquote></tr>
</table>