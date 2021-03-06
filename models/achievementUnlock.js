/*
 * Copyright (C) 2016  Max Prettyjohns
 *
 * This program is free software; you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation; either version 2 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License along
 * with this program; if not, write to the Free Software Foundation, Inc.,
 * 51 Franklin Street, Fifth Floor, Boston, MA 02110-1301 USA.
 */

'use strict';

const util = require('../util');

module.exports = (bookshelf) => {
	const AchievementUnlock = bookshelf.Model.extend({
		tableName: 'bookbrainz.achievement_unlock',
		idAttribute: 'id',
		parse: util.snakeToCamel,
		format: util.camelToSnake,
		editor() {
			return this.belongsTo('Editor', 'editor_id');
		},
		achievement() {
			return this.belongsTo('AchievementType', 'achievement_id');
		}
	});

	return bookshelf.model('AchievementUnlock', AchievementUnlock);
};
