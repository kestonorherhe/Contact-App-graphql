import React, { Component, Fragment } from 'react'

export default class ContactList extends Component {
    render() {
        return <Fragment>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-2.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Alice Collins</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">alice@example.com</a>
                </td>
                <td class="phone">+658-254-256</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop2" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Margaret Govan</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">margaret@example.com</a>
                </td>
                <td class="phone">+125-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop3" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right secondary"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop3" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-4.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Eugene Woods</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">eugene@example.com</a>
                </td>
                <td class="phone">+987-654-564</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop4" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop4" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-3.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Russell Bryant</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">russell@example.com</a>
                </td>
                <td class="phone">+235-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop5" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop5" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-6.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Cynthia Tucker</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">cynthia@example.com</a>
                </td>
                <td class="phone">+987-654-564</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop6" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop6" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-busy rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-5.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Scott Marshall</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">scott@example.com</a>
                </td>
                <td class="phone">+954-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop7" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop7" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-away rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-8.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Catherine Smith</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">catherine@example.com</a>
                </td>
                <td class="phone">+254-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop8" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop8" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-off rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-7.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Eric Howard</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">eric@example.com</a>
                </td>
                <td class="phone">+545-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop9" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop9" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-9.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Donald Watkins</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">donald@example.com</a>
                </td>
                <td class="phone">+987-654-564</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop10" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop10" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-10.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Brittany Barnes</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">brittany@example.com</a>
                </td>
                <td class="phone">+632-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop11" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop11" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>

            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-busy rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-5.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Scott Marshall</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">scott@example.com</a>
                </td>
                <td class="phone">+954-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop12" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop12" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-away rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-8.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Catherine Smith</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">catherine@example.com</a>
                </td>
                <td class="phone">+254-654-564</td>
                <td class="text-center">
                    <div class="mb-1 favorite"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop13" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop13" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-off rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-7.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Eric Howard</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">eric@example.com</a>
                </td>
                <td class="phone">+545-654-564</td>
                <td class="text-center">
                    <div class="mb-1 favorite"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop14" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop14" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-9.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Donald Watkins</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">donald@example.com</a>
                </td>
                <td class="phone">+987-654-564</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop15" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop15" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-10.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Brittany Barnes</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">brittany@example.com</a>
                </td>
                <td class="phone">+632-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop16" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop16" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>

            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-2.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Alice Collins</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">alice@example.com</a>
                </td>
                <td class="phone">+658-254-256</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop17" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop17" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Margaret Govan</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">margaret@example.com</a>
                </td>
                <td class="phone">+125-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop18" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop18" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-4.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Eugene Woods</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">eugene@example.com</a>
                </td>
                <td class="phone">+987-654-564</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop19" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop19" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-3.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Russell Bryant</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">russell@example.com</a>
                </td>
                <td class="phone">+235-654-564</td>
                <td class="text-center">
                    <div class="mb-1 favorite"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop20" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop20" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-6.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Cynthia Tucker</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">cynthia@example.com</a>
                </td>
                <td class="phone">+987-654-564</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop21" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop21" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>

            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-4.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Eugene Woods</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">eugene@example.com</a>
                </td>
                <td class="phone">+987-654-564</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop22" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop22" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-3.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="name media-heading">Russell Bryant</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">russell@example.com</a>
                </td>
                <td class="phone">+235-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop23" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop23" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-6.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Cynthia Tucker</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">cynthia@example.com</a>
                </td>
                <td class="phone">+987-654-564</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop24" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop24" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-2.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Alice Collins</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">alice@example.com</a>
                </td>
                <td class="phone">+658-254-256</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop25" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop25" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-1.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Margaret Govan</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">margaret@example.com</a>
                </td>
                <td class="phone">+125-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop26" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop26" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-busy rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-5.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Scott Marshall</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">scott@example.com</a>
                </td>
                <td class="phone">+954-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop27" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop27" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-away rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-8.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Catherine Smith</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">catherine@example.com</a>
                </td>
                <td class="phone">+254-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop28" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop28" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-off rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-7.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Eric Howard</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">eric@example.com</a>
                </td>
                <td class="phone">+545-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop29" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop29" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-9.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Donald Watkins</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">donald@example.com</a>
                </td>
                <td class="phone">+987-654-564</td>
                <td class="text-center">
                    <div class="favorite active mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop30" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop30" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
            <tr>
                <td>
                    <div class="media">
                        <div class="media-left pr-1"><span class="avatar avatar-sm avatar-online rounded-circle"><img src="../../../app-assets/images/portrait/small/avatar-s-10.png"
                            alt="avatar" /><i></i></span></div>
                        <div class="media-body media-middle">
                            <a class="media-heading name">Brittany Barnes</a>
                        </div>
                    </div>
                </td>
                <td class="text-center">
                    <a class="email" href="mailto:email@example.com">brittany@example.com</a>
                </td>
                <td class="phone">+632-654-564</td>
                <td class="text-center">
                    <div class="favorite mb-1"></div>
                </td>
                <td>
                    <a data-toggle="modal" data-target="#EditContactModal" class="primary edit mr-1"><i class="la la-pencil"></i></a>
                    <a class="danger delete mr-1"><i class="la la-trash-o"></i></a>
                    <span class="dropdown">
                        <a id="btnSearchDrop31" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true" class="dropdown-toggle dropdown-menu-right"><i
                            class="la la-ellipsis-v"></i></a>
                        <span aria-labelledby="btnSearchDrop31" class="dropdown-menu mt-1 dropdown-menu-right">
                            <a data-toggle="modal" data-target="#EditContactModal" class="dropdown-item edit"><i class="ft-edit-2"></i>
                                Edit</a>
                            <a href="#" class="dropdown-item delete"><i class="ft-trash-2"></i> Delete</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle primary"></i> Projects</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle info"></i> Team</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle warning"></i> Clients</a>
                            <a href="#" class="dropdown-item"><i class="ft-plus-circle success"></i> Friends</a>
                        </span>
                    </span>
                </td>
            </tr>
        </Fragment>
    }
}