import { iMenuTreeItem } from "../../interfaces";

interface iMenuTree {
    menuTree: iMenuTreeItem
}

// const generateRandomTree = (depth: number): iMenuTreeItem => {
//     if (depth <= 0) {
//         return { text: `Leaf ${Math.floor(Math.random() * 1000)}` };
//     }

//     const branchCount = Math.floor(Math.random() * 10) + 1;
//     const items: iMenuTreeItem[] = [];

//     for (let i = 0; i < branchCount; i++) {
//         items.push(generateRandomTree(depth - 1));
//     }

//     return { text: `Branch ${Math.floor(Math.random() * 1000)}`, items };
// };

// Example usage:
// const randomData: iMenuTreeItem = generateRandomTree(5);

// need to support show all and searching
const MenuTree: React.FC<iMenuTree> = ({menuTree}) => {

    const MenuItem = ({ data, isOpen }: {data: iMenuTreeItem, isOpen?: boolean}) => {
        if (data.items && data.items.length > 0) {
            return (
                    <details open={isOpen}>
                        <summary><div className="menu-title text-white" onClick={() => alert(data.text)}>{data.text}</div></summary>
                        <ul>
                            {data.items.map((item, index) => (
                                <li key={index}>
                                    <MenuItem data={item} />
                                </li>
                            ))}
                        </ul>
                    </details>
            );
        } else {
            return <div className="text-sm" onClick={() => alert(data.text)}>{data.text}</div>;
        }
    };

    return (
        <ul className="w-full menu bg-base-200 rounded-box">
            <li>
                <MenuItem data={menuTree} isOpen/>
            </li>
        </ul>
        // <ul className="menu bg-base-200 w-56 rounded-box">
        // <li><a>Item 1</a></li>
        // <li>
        //     <details open>
        //     <summary>Parent</summary>
        //     <ul>
        //         <li><a>Submenu 1</a></li>
        //         <li><a>Submenu 2</a></li>
        //         <li>
        //         <details open>
        //             <summary><div className="w-full" onClick={() => alert("clicked")}>Parent</div></summary>
        //             <ul>
        //             <li><div><a>submenu 1</a></div></li>
        //             <li><a>Submenu 2</a></li>
        //             </ul>
        //         </details>
        //         </li>
        //     </ul>
        //     </details>
        // </li>
        // <li><a>Item 3</a></li>
        // </ul>
    );

};

export default MenuTree;
