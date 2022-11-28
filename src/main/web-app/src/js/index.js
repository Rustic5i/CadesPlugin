import cspService from './csp.service';
import cspPluginService from './csp.plugin.service';
import angular from 'angular';
import constants from './app.constants';

var app = angular.module('app', [
    cspPluginService,
    cspService,
    constants,
]).run(['CSPPlugin', function(CSPPlugin) {
    CSPPlugin.checkForPlugin().catch(function(e) {
        throw e.message || e;
    });
}]);

export default 'app'