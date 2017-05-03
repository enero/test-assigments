<?php

use PHPUnit\Framework\TestCase;

class UrlTest extends TestCase
{
    public function testChangeUrl()
    {
	    $urlInit = 'https://www.somehost.com/test/index.html?param1=4&param2=3&param3=2&param4=1&param5=3';
        $urlRes= 'https://www.somehost.com/?param4=1&param3=2&param1=4&url=%2Ftest%2Findex.html';

	    $this->assertEquals($urlRes, changeUrl($urlInit));
    }
}

