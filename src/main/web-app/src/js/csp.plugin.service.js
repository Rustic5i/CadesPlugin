'use strict';
import angular from 'angular';

angular.module('csp.plugin.service', [])
    .provider('CSPPlugin', CSPPlugin);

function CSPPlugin() {
    var vm = this;

    this.$get = function () {
        var canPromise = !!window.Promise;

        return {
            useAsync: !!cadesplugin.CreateObjectAsync,

            checkForPlugin: function () {
                return new Promise(function (resolve, reject) {
                    if (canPromise) {
                        cadesplugin.then(function () {
                                resolve();
                            },
                            function (error) {
                                reject(error);
                            }
                        );
                    } else {
                        window.addEventListener("message", function (event) {
                                if (event.data == "cadesplugin_loaded") {
                                    resolve();
                                } else if (event.data == "cadesplugin_load_error") {
                                    reject("cadesplugin_load_error");
                                }
                            },
                            false);
                        window.postMessage("cadesplugin_echo_request", "*");
                    }
                })
            }
        };
    }
}
export default 'csp.plugin.service';