/*
 * More info at: http://phpjs.org
 *
 * This is version: 3.24
 * php.js is copyright 2011 Kevin van Zonneveld.
 *
 * Portions copyright Brett Zamir (http://brett-zamir.me), Kevin van Zonneveld
 * (http://kevin.vanzonneveld.net), Onno Marsman, Theriault, Michael White
 * (http://getsprink.com), Waldo Malqui Silva, Paulo Freitas, Jonas Raoni
 * Soares Silva (http://www.jsfromhell.com), Jack, Philip Peterson, Ates Goral
 * (http://magnetiq.com), Legaev Andrey, Ratheous, Alex, Martijn Wieringa,
 * Nate, lmeyrick (https://sourceforge.net/projects/bcmath-js/), Enrique
 * Gonzalez, Philippe Baumann, Rafał Kukawski (http://blog.kukawski.pl),
 * Webtoolkit.info (http://www.webtoolkit.info/), Ole Vrijenhoek, Ash Searle
 * (http://hexmen.com/blog/), travc, Carlos R. L. Rodrigues
 * (http://www.jsfromhell.com), Jani Hartikainen, stag019, GeekFG
 * (http://geekfg.blogspot.com), WebDevHobo (http://webdevhobo.blogspot.com/),
 * Erkekjetter, pilus, Rafał Kukawski (http://blog.kukawski.pl/), Johnny Mast
 * (http://www.phpvrouwen.nl), T.Wild,
 * http://stackoverflow.com/questions/57803/how-to-convert-decimal-to-hex-in-javascript,
 * d3x, Michael Grier, Andrea Giammarchi (http://webreflection.blogspot.com),
 * marrtins, Mailfaker (http://www.weedem.fr/), Steve Hilder, gettimeofday,
 * mdsjack (http://www.mdsjack.bo.it), felix, majak, Steven Levithan
 * (http://blog.stevenlevithan.com), Mirek Slugen, Oleg Eremeev, Felix
 * Geisendoerfer (http://www.debuggable.com/felix), Martin
 * (http://www.erlenwiese.de/), gorthaur, Lars Fischer, Joris, AJ, Paul Smith,
 * Tim de Koning (http://www.kingsquare.nl), KELAN, Josh Fraser
 * (http://onlineaspect.com/2007/06/08/auto-detect-a-time-zone-with-javascript/),
 * Chris, Marc Palau, Kevin van Zonneveld (http://kevin.vanzonneveld.net/),
 * Arpad Ray (mailto:arpad@php.net), Breaking Par Consulting Inc
 * (http://www.breakingpar.com/bkp/home.nsf/0/87256B280015193F87256CFB006C45F7),
 * Nathan, Karol Kowalski, David, Dreamer, Diplom@t (http://difane.com/), Caio
 * Ariede (http://caioariede.com), Robin, Imgen Tata (http://www.myipdf.com/),
 * Pellentesque Malesuada, saulius, Aman Gupta, Sakimori, Tyler Akins
 * (http://rumkin.com), Thunder.m, Public Domain
 * (http://www.json.org/json2.js), Michael White, Kankrelune
 * (http://www.webfaktory.info/), Alfonso Jimenez
 * (http://www.alfonsojimenez.com), Frank Forte, vlado houba, Marco, Billy,
 * David James, madipta, noname, sankai, class_exists, Jalal Berrami, ger,
 * Itsacon (http://www.itsacon.net/), Scott Cariss, nobbler, Arno, Denny
 * Wardhana, ReverseSyntax, Mateusz "loonquawl" Zalega, Slawomir Kaniecki,
 * Francois, Fox, mktime, Douglas Crockford (http://javascript.crockford.com),
 * john (http://www.jd-tech.net), Oskar Larsson Högfeldt
 * (http://oskar-lh.name/), marc andreu, Nick Kolosov (http://sammy.ru), date,
 * Marc Jansen, Steve Clay, Olivier Louvignes (http://mg-crea.com/), Soren
 * Hansen, merabi, Subhasis Deb, josh, T0bsn, Tim Wiel, Brad Touesnard, MeEtc
 * (http://yass.meetcweb.com), Peter-Paul Koch
 * (http://www.quirksmode.org/js/beat.html), Pyerre, Jon Hohle, duncan, Bayron
 * Guevara, Adam Wallner (http://web2.bitbaro.hu/), paulo kuong, Gilbert,
 * Lincoln Ramsay, Thiago Mata (http://thiagomata.blog.com), Linuxworld,
 * lmeyrick (https://sourceforge.net/projects/bcmath-js/this.), djmix, Bryan
 * Elliott, David Randall, Sanjoy Roy, jmweb, Francesco, Stoyan Kyosev
 * (http://www.svest.org/), J A R, kenneth, T. Wild, Ole Vrijenhoek
 * (http://www.nervous.nl/), Raphael (Ao RUDLER), Shingo, LH, JB, nord_ua, jd,
 * JT, Thomas Beaucourt (http://www.webapp.fr), Ozh, XoraX
 * (http://www.xorax.info), EdorFaus, Eugene Bulkin (http://doubleaw.com/),
 * Der Simon (http://innerdom.sourceforge.net/), 0m3r, echo is bad,
 * FremyCompany, stensi, Kristof Coomans (SCK-CEN Belgian Nucleair Research
 * Centre), Devan Penner-Woelk, Pierre-Luc Paour, Martin Pool, Brant Messenger
 * (http://www.brantmessenger.com/), Kirk Strobeck, Saulo Vallory, Christoph,
 * Wagner B. Soares, Artur Tchernychev, Valentina De Rosa, Jason Wong
 * (http://carrot.org/), Daniel Esteban, strftime, Rick Waldron, Mick@el,
 * Anton Ongson, Bjorn Roesbeke (http://www.bjornroesbeke.be/), Simon Willison
 * (http://simonwillison.net), Gabriel Paderni, Philipp Lenssen, Marco van
 * Oort, Bug?, Blues (http://tech.bluesmoon.info/), Tomasz Wesolowski, rezna,
 * Eric Nagel, Evertjan Garretsen, Luke Godfrey, Pul, Bobby Drake, uestla,
 * Alan C, Ulrich, Zahlii, Yves Sucaet, sowberry, Norman "zEh" Fuchs, hitwork,
 * johnrembo, Brian Tafoya (http://www.premasolutions.com/), Nick Callen,
 * Steven Levithan (stevenlevithan.com), ejsanders, Scott Baker, Philippe
 * Jausions (http://pear.php.net/user/jausions), Aidan Lister
 * (http://aidanlister.com/), Rob, e-mike, HKM, ChaosNo1, metjay, strcasecmp,
 * strcmp, Taras Bogach, jpfle, Alexander Ermolaev
 * (http://snippets.dzone.com/user/AlexanderErmolaev), DxGx, kilops, Orlando,
 * dptr1988, Le Torbi, James (http://www.james-bell.co.uk/), Pedro Tainha
 * (http://www.pedrotainha.com), James, penutbutterjelly, Arnout Kazemier
 * (http://www.3rd-Eden.com), 3D-GRAF, daniel airton wermann
 * (http://wermann.com.br), jakes, Yannoo, FGFEmperor, gabriel paderni, Atli
 * Þór, Maximusya, Diogo Resende, Rival, Howard Yeend, Allan Jensen
 * (http://www.winternet.no), davook, Benjamin Lupton, baris ozdil, Greg
 * Frazier, Manish, Matt Bradley, Cord, fearphage
 * (http://http/my.opera.com/fearphage/), Matteo, Victor, taith, Tim de
 * Koning, Ryan W Tenney (http://ryan.10e.us), Tod Gentille, Alexander M
 * Beedie, Riddler (http://www.frontierwebdev.com/), Luis Salazar
 * (http://www.freaky-media.com/), Rafał Kukawski, T.J. Leahy, Luke Smith
 * (http://lucassmith.name), Kheang Hok Chin (http://www.distantia.ca/),
 * Russell Walker (http://www.nbill.co.uk/), Jamie Beck
 * (http://www.terabit.ca/), Garagoth, Andrej Pavlovic, Dino, Le Torbi
 * (http://www.letorbi.de/), Ben (http://benblume.co.uk/), DtTvB
 * (http://dt.in.th/2008-09-16.string-length-in-bytes.html), Michael, Chris
 * McMacken, setcookie, YUI Library:
 * http://developer.yahoo.com/yui/docs/YAHOO.util.DateLocale.html, Andreas,
 * Blues at http://hacks.bluesmoon.info/strftime/strftime.js, rem, Josep Sanz
 * (http://www.ws3.es/), Cagri Ekin, Lorenzo Pisani, incidence, Amirouche, Jay
 * Klehr, Amir Habibi (http://www.residence-mixte.com/), Tony, booeyOH, meo,
 * William, Greenseed, Yen-Wei Liu, Ben Bryan, Leslie Hoare, mk.keck
 *
 * Dual licensed under the MIT (MIT-LICENSE.txt)
 * and GPL (GPL-LICENSE.txt) licenses.
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the
 * "Software"), to deal in the Software without restriction, including
 * without limitation the rights to use, copy, modify, merge, publish,
 * distribute, sublicense, and/or sell copies of the Software, and to
 * permit persons to whom the Software is furnished to do so, subject to
 * the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
 * MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
 * IN NO EVENT SHALL KEVIN VAN ZONNEVELD BE LIABLE FOR ANY CLAIM, DAMAGES
 * OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
 * ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
 * OTHER DEALINGS IN THE SOFTWARE.
 */

// jslint.com configuration options. See: http://wiki.github.com/kvz/phpjs/jslint-options
/* global window */
/* jslint adsafe: false, bitwise: false, browser: false, cap: false, css: false, debug: false, devel: false, eqeqeq: true, evil: false, forin: false, fragment: false, immed: true, indent: 4, laxbreak: false, maxerr: 100, maxlen: 80, newcap: true, nomen: false, on: true, onevar: false, passfail: false, plusplus: false, regexp: false, rhino: false, safe: false, sidebar: false, strict: false, sub: false, undef: true, white: false, widget: false */

// Our idea with CommonJS is that you can do the following:
// var php = require('php');
// php.md5('test');

exports.serialize = function (mixedValue) {
	//  discuss at: https://locutus.io/php/serialize/
	// original by: Arpad Ray (mailto:arpad@php.net)
	// improved by: Dino
	// improved by: Le Torbi (https://www.letorbi.de/)
	// improved by: Kevin van Zonneveld (https://kvz.io/)
	// bugfixed by: Andrej Pavlovic
	// bugfixed by: Garagoth
	// bugfixed by: Russell Walker (https://www.nbill.co.uk/)
	// bugfixed by: Jamie Beck (https://www.terabit.ca/)
	// bugfixed by: Kevin van Zonneveld (https://kvz.io/)
	// bugfixed by: Ben (https://benblume.co.uk/)
	// bugfixed by: Codestar (https://codestarlive.com/)
	// bugfixed by: idjem (https://github.com/idjem)
	//    input by: DtTvB (https://dt.in.th/2008-09-16.string-length-in-bytes.html)
	//    input by: Martin (https://www.erlenwiese.de/)
	//      note 1: We feel the main purpose of this function should be to ease
	//      note 1: the transport of data between php & js
	//      note 1: Aiming for PHP-compatibility, we have to translate objects to arrays
	//   example 1: serialize(['Kevin', 'van', 'Zonneveld'])
	//   returns 1: 'a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}'
	//   example 2: serialize({firstName: 'Kevin', midName: 'van'})
	//   returns 2: 'a:2:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";}'
	//   example 3: serialize( {'ü': 'ü', '四': '四', '𠜎': '𠜎'})
	//   returns 3: 'a:3:{s:2:"ü";s:2:"ü";s:3:"四";s:3:"四";s:4:"𠜎";s:4:"𠜎";}'

	var val, key, okey;
	var ktype = '';
	var vals = '';
	var count = 0;

	var _utf8Size = function (str) {
		return ~-encodeURI(str).split(/%..|./).length;
	};

	var _getType = function (inp) {
		var match;
		var key;
		var cons;
		var types;
		var type = typeof inp;

		if (type === 'object' && !inp) {
			return 'null';
		}

		if (type === 'object') {
			if (!inp.constructor) {
				return 'object';
			}
			cons = inp.constructor.toString();
			match = cons.match(/(\w+)\(/);
			if (match) {
				cons = match[1].toLowerCase();
			}
			types = ['boolean', 'number', 'string', 'array'];
			for (key in types) {
				if (cons === types[key]) {
					type = types[key];
					break;
				}
			}
		}
		return type;
	};

	var type = _getType(mixedValue);

	switch (type) {
		case 'function':
			val = '';
			break;
		case 'boolean':
			val = 'b:' + (mixedValue ? '1' : '0');
			break;
		case 'number':
			val =
				(Math.round(mixedValue) === mixedValue ? 'i' : 'd') + ':' + mixedValue;
			break;
		case 'string':
			val = 's:' + _utf8Size(mixedValue) + ':"' + mixedValue + '"';
			break;
		case 'array':
		case 'object':
			val = 'a';
			/*
      if (type === 'object') {
        var objname = mixedValue.constructor.toString().match(/(\w+)\(\)/);
        if (objname === undefined) {
          return;
        }
        objname[1] = serialize(objname[1]);
        val = 'O' + objname[1].substring(1, objname[1].length - 1);
      }
      */

			for (key in mixedValue) {
				if (mixedValue.hasOwnProperty(key)) {
					ktype = _getType(mixedValue[key]);
					if (ktype === 'function') {
						continue;
					}

					okey = key.match(/^[0-9]+$/) ? parseInt(key, 10) : key;
					vals += serialize(okey) + serialize(mixedValue[key]);
					count++;
				}
			}
			val += ':' + count + ':{' + vals + '}';
			break;
		case 'undefined':
		default:
			// Fall-through
			// if the JS object has a property which contains a null value,
			// the string cannot be unserialized by PHP
			val = 'N';
			break;
	}
	if (type !== 'object' && type !== 'array') {
		val += ';';
	}

	return val;
};

function initCache() {
	const store = [];
	// cache only first element, second is length to jump ahead for the parser
	const cache = function cache(value) {
		store.push(value[0]);
		return value;
	};

	cache.get = (index) => {
		if (index >= store.length) {
			throw RangeError(`Can't resolve reference ${index + 1}`);
		}

		return store[index];
	};

	return cache;
}

function expectType(str, cache) {
	const types = /^(?:N(?=;)|[bidsSaOCrR](?=:)|[^:]+(?=:))/g;
	const type = (types.exec(str) || [])[0];

	if (!type) {
		throw SyntaxError('Invalid input: ' + str);
	}

	switch (type) {
		case 'N':
			return cache([null, 2]);
		case 'b':
			return cache(expectBool(str));
		case 'i':
			return cache(expectInt(str));
		case 'd':
			return cache(expectFloat(str));
		case 's':
			return cache(expectString(str));
		case 'S':
			return cache(expectEscapedString(str));
		case 'a':
			return expectArray(str, cache);
		case 'O':
			return expectObject(str, cache);
		case 'C':
			return expectClass(str, cache);
		case 'r':
		case 'R':
			return expectReference(str, cache);
		default:
			throw SyntaxError(`Invalid or unsupported data type: ${type}`);
	}
}

function expectBool(str) {
	const reBool = /^b:([01]);/;
	const [match, boolMatch] = reBool.exec(str) || [];

	if (!boolMatch) {
		throw SyntaxError('Invalid bool value, expected 0 or 1');
	}

	return [boolMatch === '1', match.length];
}

function expectInt(str) {
	const reInt = /^i:([+-]?\d+);/;
	const [match, intMatch] = reInt.exec(str) || [];

	if (!intMatch) {
		throw SyntaxError('Expected an integer value');
	}

	return [parseInt(intMatch, 10), match.length];
}

function expectFloat(str) {
	const reFloat = /^d:(NAN|-?INF|(?:\d+\.\d*|\d*\.\d+|\d+)(?:[eE][+-]\d+)?);/;
	const [match, floatMatch] = reFloat.exec(str) || [];

	if (!floatMatch) {
		throw SyntaxError('Expected a float value');
	}

	let floatValue;

	switch (floatMatch) {
		case 'NAN':
			floatValue = Number.NaN;
			break;
		case '-INF':
			floatValue = Number.NEGATIVE_INFINITY;
			break;
		case 'INF':
			floatValue = Number.POSITIVE_INFINITY;
			break;
		default:
			floatValue = parseFloat(floatMatch);
			break;
	}

	return [floatValue, match.length];
}

function readBytes(str, len, escapedString = false) {
	let bytes = 0;
	let out = '';
	let c = 0;
	const strLen = str.length;
	let wasHighSurrogate = false;
	let escapedChars = 0;

	while (bytes < len && c < strLen) {
		let chr = str.charAt(c);
		const code = chr.charCodeAt(0);
		const isHighSurrogate = code >= 0xd800 && code <= 0xdbff;
		const isLowSurrogate = code >= 0xdc00 && code <= 0xdfff;

		if (escapedString && chr === '\\') {
			chr = String.fromCharCode(parseInt(str.substr(c + 1, 2), 16));
			escapedChars++;

			// each escaped sequence is 3 characters. Go 2 chars ahead.
			// third character will be jumped over a few lines later
			c += 2;
		}

		c++;

		bytes +=
			isHighSurrogate || (isLowSurrogate && wasHighSurrogate)
				? // if high surrogate, count 2 bytes, as expectation is to be followed by low surrogate
				  // if low surrogate preceded by high surrogate, add 2 bytes
				  2
				: code > 0x7ff
				? // otherwise low surrogate falls into this part
				  3
				: code > 0x7f
				? 2
				: 1;

		// if high surrogate is not followed by low surrogate, add 1 more byte
		bytes += wasHighSurrogate && !isLowSurrogate ? 1 : 0;

		out += chr;
		wasHighSurrogate = isHighSurrogate;
	}

	return [out, bytes, escapedChars];
}

function expectString(str) {
	// PHP strings consist of one-byte characters.
	// JS uses 2 bytes with possible surrogate pairs.
	// Serialized length of 2 is still 1 JS string character
	const reStrLength = /^s:(\d+):"/g; // also match the opening " char
	const [match, byteLenMatch] = reStrLength.exec(str) || [];

	if (!match) {
		throw SyntaxError('Expected a string value');
	}

	const len = parseInt(byteLenMatch, 10);

	str = str.substr(match.length);

	let [strMatch, bytes] = readBytes(str, len);

	if (bytes !== len) {
		throw SyntaxError(`Expected string of ${len} bytes, but got ${bytes}`);
	}

	str = str.substr(strMatch.length);

	// strict parsing, match closing "; chars
	if (!str.startsWith('";')) {
		throw SyntaxError('Expected ";');
	}

	return [strMatch, match.length + strMatch.length + 2]; // skip last ";
}

function expectEscapedString(str) {
	const reStrLength = /^S:(\d+):"/g; // also match the opening " char
	const [match, strLenMatch] = reStrLength.exec(str) || [];

	if (!match) {
		throw SyntaxError('Expected an escaped string value');
	}

	const len = parseInt(strLenMatch, 10);

	str = str.substr(match.length);

	let [strMatch, bytes, escapedChars] = readBytes(str, len, true);

	if (bytes !== len) {
		throw SyntaxError(
			`Expected escaped string of ${len} bytes, but got ${bytes}`
		);
	}

	str = str.substr(strMatch.length + escapedChars * 2);

	// strict parsing, match closing "; chars
	if (!str.startsWith('";')) {
		throw SyntaxError('Expected ";');
	}

	return [strMatch, match.length + strMatch.length + 2]; // skip last ";
}

function expectKeyOrIndex(str) {
	try {
		return expectString(str);
	} catch (err) {}

	try {
		return expectEscapedString(str);
	} catch (err) {}

	try {
		return expectInt(str);
	} catch (err) {
		throw SyntaxError('Expected key or index');
	}
}

function expectObject(str, cache) {
	// O:<class name length>:"class name":<prop count>:{<props and values>}
	// O:8:"stdClass":2:{s:3:"foo";s:3:"bar";s:3:"bar";s:3:"baz";}
	const reObjectLiteral = /^O:(\d+):"([^"]+)":(\d+):\{/;
	const [
		objectLiteralBeginMatch /* classNameLengthMatch */,
		,
		className,
		propCountMatch,
	] = reObjectLiteral.exec(str) || [];

	if (!objectLiteralBeginMatch) {
		throw SyntaxError('Invalid input');
	}

	if (className !== 'stdClass') {
		throw SyntaxError(`Unsupported object type: ${className}`);
	}

	let totalOffset = objectLiteralBeginMatch.length;

	const propCount = parseInt(propCountMatch, 10);
	const obj = {};
	cache([obj]);

	str = str.substr(totalOffset);

	for (let i = 0; i < propCount; i++) {
		const prop = expectKeyOrIndex(str);
		str = str.substr(prop[1]);
		totalOffset += prop[1];

		const value = expectType(str, cache);
		str = str.substr(value[1]);
		totalOffset += value[1];

		obj[prop[0]] = value[0];
	}

	// strict parsing, expect } after object literal
	if (str.charAt(0) !== '}') {
		throw SyntaxError('Expected }');
	}

	return [obj, totalOffset + 1]; // skip final }
}

function expectClass(str, cache) {
	// can't be well supported, because requires calling eval (or similar)
	// in order to call serialized constructor name
	// which is unsafe
	// or assume that constructor is defined in global scope
	// but this is too much limiting
	throw Error('Not yet implemented');
}

function expectReference(str, cache) {
	const reRef = /^[rR]:([1-9]\d*);/;
	const [match, refIndex] = reRef.exec(str) || [];

	if (!match) {
		throw SyntaxError('Expected reference value');
	}

	return [cache.get(parseInt(refIndex, 10) - 1), match.length];
}

function expectArray(str, cache) {
	const reArrayLength = /^a:(\d+):{/;
	const [arrayLiteralBeginMatch, arrayLengthMatch] =
		reArrayLength.exec(str) || [];

	if (!arrayLengthMatch) {
		throw SyntaxError('Expected array length annotation');
	}

	str = str.substr(arrayLiteralBeginMatch.length);

	const array = expectArrayItems(str, parseInt(arrayLengthMatch, 10), cache);

	// strict parsing, expect closing } brace after array literal
	if (str.charAt(array[1]) !== '}') {
		throw SyntaxError('Expected }');
	}

	return [array[0], arrayLiteralBeginMatch.length + array[1] + 1]; // jump over }
}

function expectArrayItems(str, expectedItems = 0, cache) {
	let key;
	let hasStringKeys = false;
	let item;
	let totalOffset = 0;
	let items = [];
	cache([items]);

	for (let i = 0; i < expectedItems; i++) {
		key = expectKeyOrIndex(str);

		// this is for backward compatibility with previous implementation
		if (!hasStringKeys) {
			hasStringKeys = typeof key[0] === 'string';
		}

		str = str.substr(key[1]);
		totalOffset += key[1];

		// references are resolved immediately, so if duplicate key overwrites previous array index
		// the old value is anyway resolved
		// fixme: but next time the same reference should point to the new value
		item = expectType(str, cache);
		str = str.substr(item[1]);
		totalOffset += item[1];

		items[key[0]] = item[0];
	}

	// this is for backward compatibility with previous implementation
	if (hasStringKeys) {
		items = Object.assign({}, items);
	}

	return [items, totalOffset];
}

exports.unserialize = function (str) {
	//       discuss at: https://locutus.io/php/unserialize/
	//      original by: Arpad Ray (mailto:arpad@php.net)
	//      improved by: Pedro Tainha (https://www.pedrotainha.com)
	//      improved by: Kevin van Zonneveld (https://kvz.io)
	//      improved by: Kevin van Zonneveld (https://kvz.io)
	//      improved by: Chris
	//      improved by: James
	//      improved by: Le Torbi
	//      improved by: Eli Skeggs
	//      bugfixed by: dptr1988
	//      bugfixed by: Kevin van Zonneveld (https://kvz.io)
	//      bugfixed by: Brett Zamir (https://brett-zamir.me)
	//      bugfixed by: philippsimon (https://github.com/philippsimon/)
	//       revised by: d3x
	//         input by: Brett Zamir (https://brett-zamir.me)
	//         input by: Martin (https://www.erlenwiese.de/)
	//         input by: kilops
	//         input by: Jaroslaw Czarniak
	//         input by: lovasoa (https://github.com/lovasoa/)
	//      improved by: Rafał Kukawski
	// reimplemented by: Rafał Kukawski
	//           note 1: We feel the main purpose of this function should be
	//           note 1: to ease the transport of data between php & js
	//           note 1: Aiming for PHP-compatibility, we have to translate objects to arrays
	//        example 1: unserialize('a:3:{i:0;s:5:"Kevin";i:1;s:3:"van";i:2;s:9:"Zonneveld";}')
	//        returns 1: ['Kevin', 'van', 'Zonneveld']
	//        example 2: unserialize('a:2:{s:9:"firstName";s:5:"Kevin";s:7:"midName";s:3:"van";}')
	//        returns 2: {firstName: 'Kevin', midName: 'van'}
	//        example 3: unserialize('a:3:{s:2:"ü";s:2:"ü";s:3:"四";s:3:"四";s:4:"𠜎";s:4:"𠜎";}')
	//        returns 3: {'ü': 'ü', '四': '四', '𠜎': '𠜎'}
	//        example 4: unserialize(undefined)
	//        returns 4: false
	//        example 5: unserialize('O:8:"stdClass":1:{s:3:"foo";b:1;}')
	//        returns 5: { foo: true }
	//        example 6: unserialize('a:2:{i:0;N;i:1;s:0:"";}')
	//        returns 6: [null, ""]
	//        example 7: unserialize('S:7:"\\65\\73\\63\\61\\70\\65\\64";')
	//        returns 7: 'escaped'

	try {
		if (typeof str !== 'string') {
			return false;
		}

		return expectType(str, initCache())[0];
	} catch (err) {
		//Activate the console log for debug
		//console.error(err)
		return false;
	}
};
