"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[72797],{96543:(e,t,o)=>{o.r(t),o.d(t,{data:()=>d});const d={key:"v-51a63a0a",path:"/devices/064882.html",title:"Legrand 064882 control via MQTT",lang:"en-US",frontmatter:{title:"Legrand 064882 control via MQTT",description:"Integrate your Legrand 064882 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2022-01-31T17:42:44.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Options",slug:"options",children:[]},{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Device_mode (binary)",slug:"device-mode-binary",children:[]},{level:3,title:"Cable_outlet_mode (enum)",slug:"cable-outlet-mode-enum",children:[]},{level:3,title:"Switch",slug:"switch",children:[]},{level:3,title:"Power (numeric)",slug:"power-numeric",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/064882.md",git:{updatedTime:1663140411e3}}},78694:(e,t,o)=>{o.r(t),o.d(t,{default:()=>l});var d=o(66252);const a=(0,d.uE)('<h1 id="legrand-064882" tabindex="-1"><a class="header-anchor" href="#legrand-064882" aria-hidden="true">#</a> Legrand 064882</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>064882</td></tr><tr><td>Vendor</td><td>Legrand</td></tr><tr><td>Description</td><td>Cable outlet with pilot wire and consumption measurement</td></tr><tr><td>Exposes</td><td>device_mode, cable_outlet_mode, switch (state), power, linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/064882.jpg" alt="Legrand 064882"></td></tr></tbody></table><h2 id="options" tabindex="-1"><a class="header-anchor" href="#options" aria-hidden="true">#</a> Options</h2>',3),i=(0,d.Uk)("How to use device type specific configuration"),c=(0,d.uE)('<ul><li><p><code>power_calibration</code>: Calibrates the power value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>current_calibration</code>: Calibrates the current value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li><li><p><code>voltage_calibration</code>: Calibrates the voltage value (percentual offset), takes into effect on next report of device. The value must be a number.</p></li></ul><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="device-mode-binary" tabindex="-1"><a class="header-anchor" href="#device-mode-binary" aria-hidden="true">#</a> Device_mode (binary)</h3><p>Value can be found in the published state on the <code>device_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;device_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;device_mode&quot;: NEW_VALUE}</code>. If value equals <code>pilot_on</code> device_mode is ON, if <code>pilot_off</code> OFF.</p><h3 id="cable-outlet-mode-enum" tabindex="-1"><a class="header-anchor" href="#cable-outlet-mode-enum" aria-hidden="true">#</a> Cable_outlet_mode (enum)</h3><p>Value can be found in the published state on the <code>cable_outlet_mode</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;cable_outlet_mode&quot;: &quot;&quot;}</code>. To write (<code>/set</code>) a value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;cable_outlet_mode&quot;: NEW_VALUE}</code>. The possible values are: <code>comfort</code>, <code>comfort-1</code>, <code>comfort-2</code>, <code>eco</code>, <code>frost_protection</code>, <code>off</code>.</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> Switch</h3><p>The current state of this switch is in the published state under the <code>state</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state&quot;: &quot;ON&quot;}</code>, <code>{&quot;state&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state&quot;: &quot;&quot;}</code>.</p><h3 id="power-numeric" tabindex="-1"><a class="header-anchor" href="#power-numeric" aria-hidden="true">#</a> Power (numeric)</h3><p>Instantaneous measured power. Value can be found in the published state on the <code>power</code> property. To read (<code>/get</code>) the value publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;power&quot;: &quot;&quot;}</code>. It&#39;s not possible to write (<code>/set</code>) this value. The unit of this value is <code>W</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',12),r={},l=(0,o(83744).Z)(r,[["render",function(e,t){const o=(0,d.up)("RouterLink");return(0,d.wg)(),(0,d.iD)(d.HY,null,[a,(0,d._)("p",null,[(0,d._)("em",null,[(0,d.Wm)(o,{to:"/guide/configuration/devices-groups.html#specific-device-options"},{default:(0,d.w5)((()=>[i])),_:1})])]),c],64)}]])},83744:(e,t)=>{t.Z=(e,t)=>{for(const[o,d]of t)e[o]=d;return e}}}]);