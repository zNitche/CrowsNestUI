import os
import re


def compress_files(root_dir, file_paths):
    for file_path in file_paths:
        path = f"{root_dir}{file_path}"

        print(f"Processing '{path}'...")

        if os.path.exists(path) and not path.endswith(".gz"):
            os.system(f"gzip {path}")

        else:
            print(f"'{path}' doesn't exist...")


def replace_index_entries(index_content, paths):
    print("Replacing index.html entries...")

    for path in paths:
        print(f"Processing '{path}'...")
        index_content = index_content.replace(path, f"{path}.gz")

    return index_content


def main():
    current_directory = os.path.dirname(os.path.realpath(__file__))
    build_directory = os.path.join(current_directory, "dist")

    if os.path.exists(build_directory):
        print("Opening index.html...")

        with open(os.path.join(build_directory, "index.html"), "r") as index_file:
            index_content = index_file.read()

        scripts_matches = re.findall("<script.*?src=\"(.*?)\"", index_content)
        stylesheets_matches = re.findall("<link.*?href=\"(.*?)\"", index_content)

        compress_files(build_directory, scripts_matches)
        compress_files(build_directory, stylesheets_matches)
        
        index_content = replace_index_entries(index_content, scripts_matches)
        index_content = replace_index_entries(index_content, stylesheets_matches)
        
        with open(os.path.join(build_directory, "index.html"), "w") as index_file:
            index_file.write(index_content)

    else:
        print(f"Build directory '{build_directory}' doesn't exist")


if __name__ == "__main__":
    main()
