import { Injectable } from '@angular/core';
import { Cordova, IonicNativePlugin, Plugin } from '@ionic-native/core';

/**
 * @name FbLogin
 * @description
 * fb login and get token
 *
 * @interfaces
 * FbLoginStartupOptions
 */

export interface FbLogin_INTERFACE_OPTIONS {
  option?: any;
}

@Plugin({
  pluginName: 'FbLogin',
  plugin: 'fb-login',
  pluginRef: 'FbLogin',
  repo: 'REPO',
  platforms: ['iOS,Android'],
})
@Injectable()
export class FbLogin extends IonicNativePlugin {
  /**
   * Starts FbLogin.
   * @param {FbLogin_INTERFACE_OPTIONS} options
   * @return {Promise<any>}
   */
  @Cordova({
    successIndex: 1,
    errorIndex: 2,
  })
  startPlugin(options: PLUGIN_INTERFACE_OPTIONS): Promise<any> {
    return;
  }
}
