/*
 * Copyright (C) 2015-2016  Ben Ockmore
 *           (C) 2016       Sean Burke
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

const util = require('../../util');

module.exports = (bookshelf) => {
	const EditionData = bookshelf.Model.extend({
		tableName: 'bookbrainz.edition_data',
		idAttribute: 'id',
		parse: util.snakeToCamel,
		format: util.camelToSnake,
		annotation() {
			return this.belongsTo('Annotation', 'annotation_id');
		},
		disambiguation() {
			return this.belongsTo('Disambiguation', 'disambiguation_id');
		},
		relationshipSet() {
			return this.belongsTo('RelationshipSet', 'relationship_set_id');
		},
		aliasSet() {
			return this.belongsTo('AliasSet', 'alias_set_id');
		},
		identifierSet() {
			return this.belongsTo('IdentifierSet', 'identifier_set_id');
		},
		publication() {
			return this.belongsTo('Publication', 'publication_bbid');
		},
		publisherSet() {
			return this.belongsTo('PublisherSet', 'publisher_set_id');
		},
		editionStatus() {
			return this.belongsTo('EditionStatus', 'status_id');
		},
		editionFormat() {
			return this.belongsTo('EditionFormat', 'format_id');
		},
		releaseEventSet() {
			return this.belongsTo('ReleaseEventSet', 'release_event_set_id');
		},
		languageSet() {
			return this.belongsTo('LanguageSet', 'language_set_id');
		}
	});

	return bookshelf.model('EditionData', EditionData);
};
