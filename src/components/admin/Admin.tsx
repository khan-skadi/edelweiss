import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { logoutUser } from "../../redux/actions/userActions";
import { deleteImage } from "../../redux/actions/galleryActions";
import { categories } from "../../utils/constants";
import { useTheme } from "@material-ui/core/styles";
import clsx from "clsx";
import useStyles from "./Admin.styles";
import Gallery from "react-grid-gallery";

// Components
import MiniHeader from "../header/MiniHeader";
import AddImageModal from "../modals/AddImageModal.js";
import DeleteImageModal from "../modals/DeleteImageModal";

// Props
import { GalleryProps } from "../../utils/interface/interface";
import { fetchGallery } from "../../redux/actions/galleryActions";
import { StoreState } from "../../redux/store";

// Mui
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import IconButton from "@material-ui/core/IconButton";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";

const Admin = (props: GalleryProps) => {
  const {
    root,
    toolbar,
    appBarShift,
    menuButton,
    hide,
    appBar,
    content,
    drawer,
    drawerPaper,
    drawerHeader,
    drawerLogo,
    contentShift,
    drawerTitle,
    drawerList,
    addImageBtn,
    titleMain,
    container,
    title,
    sectionGallery,
    galleryWrap,
    galleryInner,
    gridList,
    loadMore,
    tags,
    tagsList,
    catButton,
    currentButton,
  } = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState<boolean>(false);
  const [state, setState] = useState<string>("Gallery");
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [activeCategory, setActiveCategory] = useState<string>(categories[1]);
  const [currentImage, setCurrentImage] = useState<number>(0);
  const [imageToDelete, setImageToDelete] = useState<number | null>(null);
  const { gallery, fetchGallery, deleteImage, logoutUser } = props;

  useEffect(() => {
    fetchGallery();
    //eslint-disable-next-line
  }, []);

  const handleModalOpen = (): void => {
    setModalIsOpen(true);
  };

  const handleModalClose = (): void => {
    setModalIsOpen(false);
  };

  const handleDrawerOpen = (): void => {
    setOpen(true);
  };

  const handleDrawerClose = (): void => {
    setOpen(false);
  };

  const handleClick = (text: string): void => {
    switch (text) {
      case "Gallery":
        setState("Gallery");
        break;
      case "Projects":
        setState("Projects");
        break;
      case "About Us":
        setState("About Us");
        break;
      default:
        return;
    }
  };

  const onCurrentImageChange = (index: number): void => {
    setCurrentImage(index);
  };

  const handleLogout = (): void => {
    logoutUser && logoutUser();
  };

  const handleCategoryClick = (cat: string): void => {
    setActiveCategory(cat);
  };

  const handleDeleteModalOpen = (id: number): void => {
    setDeleteModalOpen(true);
    const imageId = gallery.filter((image, index) => index === id);
    setImageToDelete(imageId[0]._id);
  };

  const handleDeleteModalClose = (): void => {
    setDeleteModalOpen(false);
  };

  const handleDeleteImage = (): void => {
    deleteImage && deleteImage(imageToDelete);

    handleDeleteModalClose();
    setImageToDelete(null);
  };

  const galleryImages = gallery.map((image) => {
    const captioned = `"${image.name}" - ${image.description}`;
    return {
      src: image.path,
      caption: captioned,
      thumbnail: image.path,
      thumbnailWidth: 240,
      thumbnailHeight: 200,
      category: image.category,
      id: image._id,
    };
  });

  const filteredImages = galleryImages.filter(
    (image) => image.category === activeCategory
  );

  return (
    <>
      <AddImageModal
        modalIsOpen={modalIsOpen}
        handleModalClose={handleModalClose}
      />
      <DeleteImageModal
        open={deleteModalOpen}
        handleDeleteModalClose={handleDeleteModalClose}
        handleDeleteImage={handleDeleteImage}
      />
      <MiniHeader tab="Admin" />
      <div className={root}>
        <AppBar
          position="absolute"
          className={clsx(appBar, {
            [appBarShift]: open,
          })}
        >
          <Toolbar className={toolbar}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              className={clsx(menuButton, open && hide)}
            >
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" noWrap>
              Admin Panel{" "}
              {
                <IconButton size="small" disabled style={{ color: "#fff" }}>
                  <ChevronRightIcon />
                </IconButton>
              }{" "}
              {state}
            </Typography>

            <Typography variant="h6">
              <Button variant="contained" onClick={handleLogout}>
                Logout
              </Button>
            </Typography>
          </Toolbar>
        </AppBar>

        <Drawer
          className={drawer}
          variant="persistent"
          anchor="left"
          open={open}
          classes={{
            paper: drawerPaper,
          }}
        >
          <div className={clsx(drawerHeader, drawerLogo)}>
            <Typography variant="body1" className={drawerTitle}>
              Aco <br />
              Stamenkovski
            </Typography>
            <IconButton onClick={handleDrawerClose}>
              {theme.direction === "ltr" ? (
                <ChevronLeftIcon />
              ) : (
                <ChevronRightIcon />
              )}
            </IconButton>
          </div>
          <Divider />
          <List className={drawerList}>
            {["Gallery", "Projects", "About Us"].map((text, index) => (
              <ListItem button key={text} onClick={() => handleClick(text)}>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
        </Drawer>

        <main
          className={clsx(content, {
            [contentShift]: open,
          })}
        >
          {state === "Gallery" && (
            <section className={sectionGallery}>
              <div className={drawerHeader} />
              <div className={titleMain}>
                <div className={container}>
                  <h1 className={title}>Gallery</h1>
                </div>
              </div>
              <div className={galleryWrap}>
                <div className={container}>
                  <div className={galleryInner}>
                    <div className={tags}>
                      <ul className={tagsList}>
                        {categories.map((cat, index) => (
                          <li key={index}>
                            <Button
                              className={clsx(
                                catButton,
                                cat === activeCategory ? currentButton : ""
                              )}
                              onClick={() => handleCategoryClick(cat)}
                              variant="contained"
                              disableElevation
                            >
                              {cat}
                            </Button>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className={gridList}>
                      {activeCategory !== "All" ? (
                        <Gallery
                          images={filteredImages}
                          currentImageWillChange={onCurrentImageChange}
                        />
                      ) : (
                        <Gallery
                          images={galleryImages}
                          currentImageWillChange={onCurrentImageChange}
                          customControls={[
                            <Button
                              className={catButton}
                              onClick={() =>
                                handleDeleteModalOpen(currentImage)
                              }
                              style={{
                                margin: 0,
                                padding: "0 10px",
                              }}
                              key="deleteImage"
                            >
                              Delete Image
                            </Button>,
                          ]}
                        />
                      )}
                    </div>
                    <div style={{ clear: "both" }} />
                    <div className={loadMore}>
                      <Button
                        className={addImageBtn}
                        onClick={handleModalOpen}
                        variant="contained"
                        disableElevation
                      >
                        Add Images
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
          {state === "Projects" && (
            <>
              <section className={sectionGallery}>
                <div className={drawerHeader} />
                <div className={titleMain}>
                  <div className={container}>
                    <h1 className={title}>Projects</h1>
                  </div>
                </div>
                <Typography paragraph style={{ marginTop: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis
                  convallis tellus id interdum velit laoreet id donec ultrices.
                  Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Cursus euismod quis viverra nibh cras. Metus vulputate eu
                  scelerisque felis imperdiet proin fermentum leo. Mauris
                  commodo quis imperdiet massa tincidunt. Cras tincidunt
                  lobortis feugiat vivamus at augue. At augue eget arcu dictum
                  varius duis at consectetur lorem. Velit sed ullamcorper morbi
                  tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                  sit amet volutpat consequat mauris. Elementum eu facilisis sed
                  odio morbi. Euismod lacinia at quis risus sed vulputate odio.
                  Morbi tincidunt ornare massa eget egestas purus viverra
                  accumsan in. In hendrerit gravida rutrum quisque non tellus
                  orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                  morbi tristique senectus et. Adipiscing elit duis tristique
                  sollicitudin nibh sit. Ornare aenean euismod elementum nisi
                  quis eleifend. Commodo viverra maecenas accumsan lacus vel
                  facilisis. Nulla posuere sollicitudin aliquam ultrices
                  sagittis orci a.
                </Typography>
              </section>
            </>
          )}
          {state === "About Us" && (
            <>
              <section className={sectionGallery}>
                <div className={drawerHeader} />
                <div className={titleMain}>
                  <div className={container}>
                    <h1 className={title}>About Us</h1>
                  </div>
                </div>
                <Typography paragraph style={{ marginTop: "30px" }}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Rhoncus dolor purus non enim praesent elementum facilisis leo
                  vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                  hendrerit gravida rutrum quisque non tellus. Convallis
                  convallis tellus id interdum velit laoreet id donec ultrices.
                  Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl
                  suscipit adipiscing bibendum est ultricies integer quis.
                  Cursus euismod quis viverra nibh cras. Metus vulputate eu
                  scelerisque felis imperdiet proin fermentum leo. Mauris
                  commodo quis imperdiet massa tincidunt. Cras tincidunt
                  lobortis feugiat vivamus at augue. At augue eget arcu dictum
                  varius duis at consectetur lorem. Velit sed ullamcorper morbi
                  tincidunt. Lorem donec massa sapien faucibus et molestie ac.
                </Typography>
                <Typography paragraph>
                  Consequat mauris nunc congue nisi vitae suscipit. Fringilla
                  est ullamcorper eget nulla facilisi etiam dignissim diam.
                  Pulvinar elementum integer enim neque volutpat ac tincidunt.
                  Ornare suspendisse sed nisi lacus sed viverra tellus. Purus
                  sit amet volutpat consequat mauris. Elementum eu facilisis sed
                  odio morbi. Euismod lacinia at quis risus sed vulputate odio.
                  Morbi tincidunt ornare massa eget egestas purus viverra
                  accumsan in. In hendrerit gravida rutrum quisque non tellus
                  orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
                  morbi tristique senectus et. Adipiscing elit duis tristique
                  sollicitudin nibh sit. Ornare aenean euismod elementum nisi
                  quis eleifend. Commodo viverra maecenas accumsan lacus vel
                  facilisis. Nulla posuere sollicitudin aliquam ultrices
                  sagittis orci a.
                </Typography>
              </section>
            </>
          )}
        </main>
      </div>
    </>
  );
};

const mapStateToProps = (state: StoreState) => ({
  gallery: state.gallery.gallery,
});

const mapActionsToProps = {
  fetchGallery,
  deleteImage,
  logoutUser,
};

export default connect(mapStateToProps, mapActionsToProps)(Admin);
