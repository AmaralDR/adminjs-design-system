"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DropZoneItem = void 0;
const react_1 = __importDefault(require("react"));
const styled_components_1 = __importDefault(require("styled-components"));
const box_1 = require("../../atoms/box/box");
const icon_1 = require("../../atoms/icon");
const button_1 = require("../../atoms/button");
const DropZoneImg = styled_components_1.default.div `
  width: 80px;
  height: 80px;
  margin-right: ${({ theme }) => theme.space.lg};
  background-image: url('${({ src }) => src}');
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50% 50%;
  display: inline-block;
`;
/**
 * @classdesc
 *
 * <img src="components/drop-zone-item.png" />
 *
 * Single uploaded file. Usually it is used within {@link DropZone}, but it can also be
 * reused anywhere
 *
 * ### Usage
 *
 * ```javascript
 * import { DropZoneItem, DropZoneItemProps } from '@adminjs/design-system'
 * ```
 *
 * @see DropZoneItem
 * @hideconstructor
 * @see DropZoneItemProps
 * @example
 * return (
 *  <DropZoneItem
 *    src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.npr.org%2F2019%2F05%2F17%2F724262019%2Fgrumpy-cat-dies-her-spirit-will-live-on-family-says&psig=AOvVaw2ZKtTEZr8N43fx9x-lTITa&ust=1581083274368000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCKidqqyIvecCFQAAAAAdAAAAABAD"
 *    filename="shut-up-it-works.png"
 *  />
 * )
 * @component
 * @subcategory Molecules
 * @section design-system
 */
const DropZoneItem = (props) => {
    const { file, onRemove, filename } = props;
    let { src } = props;
    if (file && ['image/png', 'image/jpeg', 'image/gif'].includes(file.type)) {
        src = URL.createObjectURL(file);
    }
    return (react_1.default.createElement(box_1.Box, { bg: "grey20", px: "lg", py: "default", mt: "default", flex: true, alignItems: "center" },
        react_1.default.createElement(icon_1.Icon, { icon: "Attachment", mr: "default" }),
        src ? (react_1.default.createElement(DropZoneImg, { src: src })) : '',
        react_1.default.createElement(box_1.Box, { flexGrow: 1 }, (file === null || file === void 0 ? void 0 : file.name) || filename),
        onRemove && (react_1.default.createElement(button_1.Button, { variant: "text", m: "-8px", size: "icon", type: "button", onClick: () => onRemove && onRemove() },
            react_1.default.createElement(icon_1.Icon, { icon: "Close" })))));
};
exports.DropZoneItem = DropZoneItem;
exports.default = DropZoneItem;
