Plugin supports many arguments. All arguments are optional except for your <b>Twitter username</b>!<br />
<br />
<table cellpadding='2' border='1' cellspacing='0'>
<blockquote><tbody>
<tr>
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
<blockquote><td> friends </td>
<td>
by default set to <b>0</b> to load followers. set it to <b>1</b> to load friends (whom you follow)<br>
</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td> width </td>
<td>You can set width of widget container in pixels, Or set <b>0</b> for auto width.</td>
<td><b>0</b></td>
</blockquote></tr></blockquote>

<blockquote><tr>
<blockquote><td align='center'><b>Friends/Followers Pictures</b></td>
</blockquote></tr>
<tr>
<blockquote><td>users_max</td>
<td>Twitter will return your latest 100 Followers/Friends or less. you<br>
can choose to show a smaller number of pictures (ex: 80).</td>
<td><b>20</b></td>
</blockquote></tr></blockquote>

<blockquote><tr>
<blockquote><td>users_height</td>
<td>Set the height of pictures container to something like <b>100</b> pixels, to prevent flickering while pictures are added. Or set <b>0</b> for auto.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>users_random</td>
<td>Set this to <b>1</b> to select random subset of the returned pictures each time the widget is loaded.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>users_reverse</td>
<td>Set this to <b>1</b> to reverse the order of pictures returned.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>users_loaded</td>
<td>Callback function to execute after pictures was loaded and inserted<br>
in widget.</td>
<td><b>null</b></td>
</blockquote></tr>
<tr>
<blockquote><td>loop</td>
<td>loop pictures animation or not. set it to <b>1</b> to loop or<br>
<b>0</b> to disable.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_link</td>
<td>by default, friends pictures will link to their Twitter profile. your can<br>
link it to their homepage by setting this to <b>1.</b></td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_image</td>
<td>Pictures are 48x48 pixels. you can scale it down to 32 pixels for example.</td>
<td><b>48</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_name</td>
<td>Set this to 0 to hide name of the user.</td>
<td><b>1</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_animate</td>
<td>Customize picture entry animation type. available values are <b>'width'</b>,<br>
<b>'height'</b>, <b>'opacity'</b>
<br /> Setting this empty string <b>''</b>, will disable animating users pictures and display them at once.<br>
</td>
<td><b>'opacity'</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_change</td>
<td>Entry transition time of a picture in milliseconds.</td>
<td><b>100</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_swap</td>
<td>Time in milliseconds to wait before animating pictures again.<br>
This delay is used only when tweets are disabled. otherwise swapping happens<br>
after tweets animation ends. </td>
<td><b>2000</b></td>
</blockquote></tr>
<tr>
<blockquote><td>user_append</td>
<td>By default friends picture is added by the end of pictures list. to<br>
insert picture at the beginning of list set this to <b>0</b></td>
<td><b>1</b></td>
</blockquote></tr>
<tr>
<blockquote><td align='center'><b>Profile Header</b></td>
</blockquote></tr>
<tr>
<blockquote><td>header</td>
<td>Set this to <b>0</b> to disable showing profile header.</td>
<td><b>1</b></td>
</blockquote></tr>
<tr>
<blockquote><td>header_height</td>
<td>Set the height of profile container to something like <b>60</b> pixels, or set <b>0</b> for auto.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>header_loaded</td>
<td>Callback function to execute after header was loaded and inserted in<br>
widget.</td>
<td><b>null</b></td>
</blockquote></tr>
<tr>
<blockquote><td>header_html</td>
<td>
By default, widget will display your name and picture as in<br>
demos, but you can customize by setting this option with HTML template.<br>
<br />
HTML code may contain any of these optional variables which will be replaced<br>
with actual values.<br />
<b><i>tp</i></b> : Twitter profile Link.<br />
<b><i>ti</i></b> : Twitter picture.<br />
<b><i>ts</i></b> : your Twitter username.<br />
<b><i>tn</i></b> : your name.<br />
<b><i>fo</i></b> : followers count.<br />
<b><i>fr</i></b> : friends count.<br /><br /></blockquote></blockquote>

<blockquote><b>Default template:</b><br />
<pre><code>&lt;a href="_tp_" target="_blank" align="left"&gt;<br>
	&lt;img src="_ti_" border="0" /&gt;<br>
	&lt;em&gt;_tn_&lt;/em&gt;<br>
	&lt;var&gt;&lt;i&gt;&lt;/i&gt;Follow @_ts_&lt;/var&gt;<br>
	&lt;dfn&gt;_fo_ followers&lt;/dfn&gt;<br>
&lt;/a&gt;<br>
</code></pre></blockquote>

<blockquote></td>
<td><b>''</b></td>
</blockquote><blockquote></tr>
<tr>
<blockquote><td align='center'><b>Friends' Tweets</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet</td>
<td>Set this to <b>1 </b>to display friends' tweets at widget footer. Tweets<br>
will also appear as a tool tip when hovering on a friend picture.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_height</td>
<td>You can set the height of tweet container to something like <b>60</b> pixels, to prevent flickering while tweets are animated. Or set <b>0</b> for auto.</td>
<td><b>0</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_avatar</td>
<td>Set to<b> 0</b> to hide user picture in tweets.</td>
<td><b>1</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_author</td>
<td>Show tweet author name or not. you might set it to <b>0</b> to hide<br>
the author name.</td>
<td><b>1</b></td>
</blockquote></tr>
<tr>
<blockquote><td>tweet_date</td>
<td>Show tweet date or not. set it to <b>0</b> to hide.</td>
<td><b>1</b></td>
</blockquote></tr></blockquote>

<blockquote><tr>
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
<td>Tweet transition time in milliseconds. </td>
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
</tbody>
</table>