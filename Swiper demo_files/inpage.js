(()=>{"use strict";var m={};const p="refs/tags/v4.4.0",R="70d74f6032055a67457b58f43650bb943f8b392f",q="MISSING_ENV_VAR".TEST_ENV==="true",E=null,_=null,v=null,A=null,T=null;let r;(function(e){e.authenticationRequest="stacksAuthenticationRequest",e.signatureRequest="signatureRequest",e.structuredDataSignatureRequest="structuredDataSignatureRequest",e.transactionRequest="stacksTransactionRequest",e.profileUpdateRequest="profileUpdateRequest"})(r||(r={}));const l="stacks-wallet",b="content-script";let i;(function(e){e.transactionRequest="transactionRequest",e.transactionResponse="transactionResponse",e.authenticationRequest="authenticationRequest",e.authenticationResponse="authenticationResponse",e.signatureRequest="signatureRequest",e.signatureResponse="signatureResponse",e.structuredDataSignatureRequest="structuredDataSignatureRequest",e.structuredDataSignatureResponse="structuredDataSignatureResponse",e.profileUpdateRequest="profileUpdateRequest",e.profileUpdateResponse="profileUpdateResponse"})(i||(i={}));let d;(function(e){e.RequestDerivedStxAccounts="RequestDerivedStxAccounts",e.GetActiveFormState="GetActiveFormState",e.SetActiveFormState="SetActiveFormState",e.ClearActiveFormState="ClearActiveFormState",e.ShareInMemoryKeyToBackground="ShareInMemoryKeyToBackground",e.RequestInMemoryKeys="RequestInMemoryKeys",e.RemoveInMemoryKeys="RemoveInMemoryKeys",e.OriginatingTabClosed="OriginatingTabClosed"})(d||(d={}));const g=async(e,n={})=>new Promise((s,o)=>{const a=setTimeout(()=>{o("Unable to get response from Blockstack extension")},1e3),t=c=>{c.data.source==="blockstack-extension"&&c.data.method===`${e}Response`&&(clearTimeout(a),window.removeEventListener("message",t),s(c.data))};window.addEventListener("message",t),window.postMessage({method:e,source:"blockstack-app",...n},window.location.origin)}),u=(e,n)=>{const{data:s}=e,o=s.source===l,a=s.method===n;return o&&a&&!!s.payload},f={getURL:async()=>{const{url:e}=await g("getURL");return e},structuredDataSignatureRequest:async e=>{const n=new CustomEvent(r.structuredDataSignatureRequest,{detail:{signatureRequest:e}});return document.dispatchEvent(n),new Promise((s,o)=>{const a=t=>{if(u(t,i.signatureResponse)&&t.data.payload?.signatureRequest===e){if(window.removeEventListener("message",a),t.data.payload.signatureResponse==="cancel"){o(t.data.payload.signatureResponse);return}typeof t.data.payload.signatureResponse!="string"&&s(t.data.payload.signatureResponse)}};window.addEventListener("message",a)})},signatureRequest:async e=>{const n=new CustomEvent(r.signatureRequest,{detail:{signatureRequest:e}});return document.dispatchEvent(n),new Promise((s,o)=>{const a=t=>{if(u(t,i.signatureResponse)&&t.data.payload?.signatureRequest===e){if(window.removeEventListener("message",a),t.data.payload.signatureResponse==="cancel"){o(t.data.payload.signatureResponse);return}typeof t.data.payload.signatureResponse!="string"&&s(t.data.payload.signatureResponse)}};window.addEventListener("message",a)})},authenticationRequest:async e=>{const n=new CustomEvent(r.authenticationRequest,{detail:{authenticationRequest:e}});return document.dispatchEvent(n),new Promise((s,o)=>{const a=t=>{if(u(t,i.authenticationResponse)&&t.data.payload?.authenticationRequest===e){if(window.removeEventListener("message",a),t.data.payload.authenticationResponse==="cancel"){o(t.data.payload.authenticationResponse);return}s(t.data.payload.authenticationResponse)}};window.addEventListener("message",a)})},transactionRequest:async e=>{const n=new CustomEvent(r.transactionRequest,{detail:{transactionRequest:e}});return document.dispatchEvent(n),new Promise((s,o)=>{const a=t=>{if(u(t,i.transactionResponse)&&t.data.payload?.transactionRequest===e){if(window.removeEventListener("message",a),t.data.payload.transactionResponse==="cancel"){o(t.data.payload.transactionResponse);return}typeof t.data.payload.transactionResponse!="string"&&s(t.data.payload.transactionResponse)}};window.addEventListener("message",a)})},profileUpdateRequest:async e=>{const n=new CustomEvent(r.profileUpdateRequest,{detail:{profileUpdateRequest:e}});return document.dispatchEvent(n),new Promise((s,o)=>{const a=t=>{if(u(t,i.profileUpdateResponse)&&t.data.payload?.profileUpdateRequest===e){if(window.removeEventListener("message",a),t.data.payload.profileUpdateResponse==="cancel"){o(t.data.payload.profileUpdateResponse);return}typeof t.data.payload.profileUpdateResponse!="string"&&s(t.data.payload.profileUpdateResponse)}};window.addEventListener("message",a)})},getProductInfo(){return{version:"4.4.0",name:"Hiro Wallet for Web",meta:{tag:p,commit:R}}},request:function(e){throw new Error("`request` function is not implemented")}};window.StacksProvider=f})();
